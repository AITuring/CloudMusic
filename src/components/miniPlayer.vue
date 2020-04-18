// 底部迷你播放器
<template>
  <div class="btm_player">
    <span class="play_icon" :class="{stop_btn: !playerStatus}" @click="changePlayerStatus"></span>
    <div class="musicInfo">
      <img v-lazy="currentMusic.imgUrl" alt="歌曲图片" @click="gotoPlayerPage" />
      <p>
        <span>{{ currentMusic.song }}</span> -
        <span>{{ currentMusic.singer }}</span>
      </p>
      <div class="process">
        <x-progress :percent="percent" :show-cancel="false"></x-progress>
      </div>
    </div>
    <audio :src="currentMusic.url" loop autoplay @timeupdate="timeupdate" ref="player">你的浏览器暂时不支持H5播放</audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { XProgress } from "vux";

export default {
  data() {
    return {
      duration: 0
    };
  },
  computed: {
    ...mapGetters(["currentMusic", "currentTime", "playerStatus"]),
    percent() {
      return Number(((this.currentTime / this.duration) * 100).toFixed(2));
    }
  },
  methods: {
    ...mapMutations([
      "setCurrentTime",
      "changePlayerStatus",
      "setMiniPlayer"
    ]),
    timeupdate(e) {
      this.duration = e.target.duration;
      this.setCurrentTime(e.target.currentTime);
    },
    gotoPlayerPage() {
      this.setMiniPlayer(false);
      this.$router.push({
        path: "/player"
      });
    }
  },
  watch: {
    playerStatus(status) {
      let audio = this.$refs.player;
      if (status) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  },
  components: {
    XProgress
  }
};
</script>

<style scoped>
.btm_player {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: 53px;
  width: 100vw;
  background: url("~@/assets/playbar.png") repeat-x;
}
.musicInfo {
  position: relative;
  max-width: 80%;
  margin-left: 18%;
}
.musicInfo img {
  position: absolute;
  width: 13vw;
  height: 13vw;
  top: -3vw;
  left: 0;
}
.musicInfo p {
  position: absolute;
  left: 15vw;
  top: 2vw;
  color: #e8e8e8;
  font-size: 0.8rem;
  height: 5vw;
  overflow: hidden;
}
.process {
  position: absolute;
  top: 8vw;
  left: 15vw;
  width: 60vw;
}
.play_icon {
  position: absolute;
  left: 4%;
  top: 2vw;
  width: 36px;
  height: 36px;
  background: url("~@/assets/playbar.png") no-repeat;
  background-position: 0 -165px;
}
.stop_btn {
  background-position: 0 -204px;
}
</style>
