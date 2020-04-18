//搜索选项卡
<template>
  <div>
    <div class="search">
      <img class="find" src="@/assets/find.svg" alt="find" />
      <x-input
        placeholder="搜索歌曲、歌手、专辑"
        v-model="searchText"
        @on-enter="search"
        @on-click-clear-icon="clear"
        @on-change="change"
      ></x-input>
    </div>
    <Trending v-if="isWord" @hot-search="search" :hotWord="hotWord"></Trending>
    <div v-else>
      <section v-if="error">
        <h1>暂无搜索结果</h1>
      </section>
      <section v-else>
        <div v-if="loading">Loading.....</div>
        <div v-else>
          <Song v-for="item in searchResult" :key="item.id" :music="item"></Song>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getSearchSong, getWord } from "@/api/getData";
import { XInput } from "vux";
import Trending from "@/components/searchTab/trending.vue";
import Song from "@/components/song.vue";

export default {
  data() {
    return {
      searchText: "",
      isWord: false,
      loading: true,
      error: false,
      searchResult: [],
      hotWord: [],
    };
  },
  components: {
    XInput,
    Trending,
    Song
  },
  methods: {
    async search(data) {
      this.isWord = false;
      try {
        let res = await this.getSearchResult(data);
        this.searchResult = res;
        this.searchText = data;
        this.loading = false;
      } catch (error) {
        this.searchText = data;
        this.error = true;
      }
    },
    async getSearchResult(data) {
      const word = data.trim();
      let response = await getSearchSong(word);
      let song = response.data.result.songs;

      let searchResultList = song.map(function(currentValue) {
        let artistsName = "";
        if (currentValue.artists.length >= 2) {
          artistsName =
            currentValue.artists[0].name + "/" + currentValue.artists[1].name;
        } else {
          artistsName = currentValue.artists[0].name;
        }
        let obj = {
          id: currentValue.id,
          title: currentValue.name,
          alias: currentValue.alias[0],
          artists: artistsName,
          album: currentValue.album.name
        };
        return obj;
      });

      return searchResultList;
    },
    clear() {
      this.isWord = true;
    },
    change(value) {
      if (value === "") {
        this.isWord = true;
      }
    }
  },
  async created() {
    let response = await getWord();
    this.hotWord = response.data.result.hots;
    this.isWord = true;
  }
};
</script>

<style scoped>
.vux-x-input {
  background: #ebecec;
  border-radius: 30px;
  padding: 0 30px;
  height: 30px;
  width: 100%;
}

.weui-cell:before {
  border: none;
}

.search {
  position: relative;
  background: #fbfcfd;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 10px;
}

.find {
  position: absolute;
  left: 11px;
  top: 24px;
  margin: 0 8px;
  vertical-align: middle;
  display: inline-block;
  width: 13px;
  height: 13px;
  z-index: 99;
}
</style>
