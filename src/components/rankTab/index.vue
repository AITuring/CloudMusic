// 排行榜选项卡
<template>
  <div>
    <div class="hot-top">
      <div class="hot-flex">
        <div class="hot-icon"></div>
        <div class="hot-time">更新日期：{{ getTime }}</div>
      </div>
    </div>
    <section v-if="error">
      <h1>加载失败！</h1>
    </section>
    <section v-else style="padding-bottom: 68px">
      <div v-if="loading">loading...</div>
      <div v-else>
        <Song v-for="item in rank" :key="item.id" :music="item"></Song>
      </div>
    </section>
  </div>
</template>

<script>
import Song from "@/components/song.vue";
import { getRank } from "@/api/getData";

export default {
  data() {
    return {
      loading: true,
      error: false,
      rank: []
    };
  },
  components: {
    Song
  },
  computed: {
    getTime() {
      let d = new Date();
      let month = d.getMonth();
      let day = d.getDate();
      return `${month + 1}月${day}日`;
    }
  },
  methods: {
    parseData(response) {
      let song = response.data.playlist.tracks.slice(0, 20);

      let rankListData = song.map(function(currentValue, index) {
        let artistsName = "";
        if (currentValue.ar.length >= 2) {
          //最多两个歌手名称
          artistsName = currentValue.ar[0].name + "/" + currentValue.ar[1].name;
        } else {
          artistsName = currentValue.ar[0].name;
        }
        let obj = {
          id: currentValue.id,
          title: currentValue.name,
          alias: currentValue.alia[0],
          artists: artistsName,
          album: currentValue.al.name,
          rank: index + 1
        };
        if (index <= 2) {
          //前三歌曲加粗
          obj.color = true;
        }
        if (index <= 8) {
          //前9歌曲序号加0
          obj.rank = "0" + obj.rank;
        }
        return obj;
      });

      return rankListData;
    }
  },
  async created() {
    try {
      let response = await getRank();
      this.rank = this.parseData(response);
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.hot-time {
  text-align: left;
  margin-top: 10px;
  color: hsla(0, 0%, 100%, 0.8);
  font-size: 12px;
  transform: scale(0.91);
  transform-origin: left top;
}
.hot-icon {
  width: 142px;
  height: 67px;
  background-image: url("~@/assets/hot_icon.png");
  background-position: -24px -30px;
  background-size: 166px 97px;
}
.hot-flex {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  padding-left: 20px;
  box-sizing: border-box;
}
.hot-top {
  position: relative;
  padding-top: 38.9%;
  overflow: hidden;
  background: url("~@/assets/hot_bg.jpg") no-repeat;
  background-size: contain;
}
.hot-top:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
