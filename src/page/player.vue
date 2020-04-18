<template>
  <div>
    <div class="song_bg" :style="bgStyle"></div>
    <div class="wrapper">
      <div class="player_getBack" @click="goBack">
        <h3>返回</h3>
      </div>
      <div class="icon_rotate" @click="changePlayerStatus">
        <div class="needle"></div>
        <div class="icon_center">
          <div class="song_img">
            <div class="default_img rotateDiv" :class="{noRotate: !playerStatus}">
              <img v-lazy="currentMusic.imgUrl" alt="歌曲图片" />
            </div>
          </div>
        </div>
        <span class="play_btn" v-if="!playerStatus"></span>
      </div>
      <div class="song_info">
        <p class="song_title">{{ currentMusic.song }} — {{ currentMusic.singer }}</p>
        <div class="lrc_wrapper" ref="lrc">
          <div class="lrc_content">
            <p
              class="lrc_item"
              :class="{active_lrc: activeIndex === index}"
              v-for="(item, index) in currentMusic.lyric"
              :key="index"
              ref="lrc_item"
            >{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div v-if="isComment" class="comment_wrap">
        <p>⭐ 热门评论 ⭐</p>
        <Comment v-for="(item, index) in comment" :key="index" :data="item"></Comment>
      </div>
      <div class="link_comment" v-else @click="gotoComment">查看歌曲评论</div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";
import BScroll from "better-scroll";
import { mapMutations, mapGetters } from "vuex";
import { getComment } from "@/api/getData";
import Comment from "@/components/comment.vue";

export default {
  data() {
    return {
      scroll: "",
      comment: [],
      isComment: false,
      commentId: 0
    };
  },
  computed: {
    ...mapGetters(["currentMusic", "currentTime", "playerStatus"]),
    activeIndex() {
      return this.currentMusic.lyric.findIndex((item, index, array) => {
        let nextLyric = array[index + 1];

        if (
          item.time <= this.currentTime &&
          (nextLyric ? this.currentTime < nextLyric.time : true)
        ) {
          return index;
        }
      });
    },
    bgStyle() {
      return {
        backgroundImage: `url(${this.currentMusic.imgUrl})`
      };
    }
  },
  methods: {
    ...mapMutations(["changePlayerStatus", "setMiniPlayer"]),
    goBack() {
      this.setMiniPlayer(true);
      this.isComment = false;
      this.$router.back();
    },
    async gotoComment() {
      if (this.commentId == this.currentMusic.id) {
        this.isComment = true;
      } else {
        let result = await getComment(this.currentMusic.id);
        this.commentId = this.currentMusic.id;
        this.parseComment(result.data.hotComments);
        this.isComment = true;
      }
    },
    parseComment(data, id) {
      this.comment = data.map((item, index) => {
        return {
          content: item.content,
          likedCount: item.likedCount,
          username: item.user.nickname,
          avatarUrl: item.user.avatarUrl,
          time: this.parseCommentDate(item.time)
        };
      });
    },
    parseCommentDate(time) {
      let date = new Date(Number(time));
      let year = date.getFullYear() == 2020 ? "" : `${date.getFullYear()}年`;
      return `${year}${date.getMonth() + 1}月${date.getDate()}日`;
    }
  },
  watch: {
    activeIndex(newIndex) {
      let lrc_item = this.$refs.lrc_item;
      this.scroll.scrollToElement(lrc_item[newIndex], 200, 0, true);
    }
  },
  activated() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.lrc);
    } else {
      this.scroll.refresh();
    }
    if (this.commentId == this.currentMusic.id) {
      this.isComment = true;
    }
  },
  components: {
    XButton,
    Comment
  }
};
</script>

<style scoped>
@import url("~@/styles/player.css");
</style>