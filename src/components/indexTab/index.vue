// 首页选项卡
<template>
  <div class="content">
    <h2 class="remd">推荐歌单</h2>
    <RecommendList></RecommendList>
    <h2 class="remd">最新音乐</h2>
    <div>
      <section v-if="error">
        <h1>加载失败</h1>
      </section>
      <section v-else>
        <div v-if="loading">loading</div>
        <div v-else>
          <Song v-for="item in data" :key="item.id" :music="item"></Song>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { getNewSong } from "@/api/getData";
import RecommendList from "@/components/indexTab/recommendList.vue";
import Song from "@/components/song.vue";
import Footer from "@/components/indexTab/footer.vue";

export default {
  data() {
    return {
      loading: true,
      data: [],
      error: false
    };
  },
  components: {
    RecommendList,
    Song,
    Footer
  },
  methods: {
    parseData(response) {
      let result = response.data.result.map(function(currentValue) {
        let artistsName = "";

        if (currentValue.song.artists.length >= 2) {
          artistsName =
            currentValue.song.artists[0].name +
            "/" +
            currentValue.song.artists[1].name;
        } else {
          artistsName = currentValue.song.artists[0].name;
        }

        let obj = {
          id: currentValue.id,
          title: currentValue.name,
          artists: artistsName,
          album: currentValue.song.album.name
        };
        return obj;
      });

      return result;
    }
  },
  async created() {
    try {
      let response = await getNewSong();
      this.data = this.parseData(response);
    } catch (err) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.content {
  padding-top: 20px;
}
.remd {
  display: block;
  position: relative;
  padding-left: 9px;
  margin-bottom: 14px;
  font-size: 17px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
}
.remd:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -9px;
  width: 2px;
  height: 16px;
  background-color: #d33a31;
}
</style>
