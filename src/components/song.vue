// 单个歌曲组件
<template>
  <a href="javascript: void(0)" class="song" @click="playMusic(music)">
    <div class="song-num" v-if="music.rank" :class="{highlight: music.color}">{{ music.rank }}</div>
    <div class="song-wrapper">
      <div class="song-info">
        <div class="song-title">
          {{ music.title }}
          <span v-if="music.alias">({{ music.alias }})</span>
        </div>
        <div class="song-detail">
          <i class="sq"></i>
          {{ music.artists }} - {{ music.album }}
        </div>
      </div>
      <div class="song-play">
        <span class="play-icon"></span>
      </div>
    </div>
  </a>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  props: {
    music: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["getMusicData"]),
    ...mapMutations(["setLoad", "setToast", "setMiniPlayer"]),
    async playMusic(music) {
      this.setLoad(true);
      try {
        let res = await this.getMusicData(music);
        this.$store.state.playerStatus = true;
        this.setMiniPlayer(false);
        this.$router.push({
          path: "/player"
        });
      } catch (err) {
        this.setToast(true);
      } finally {
        this.setLoad(false);
      }
    }
  }
};
</script>

<style scoped>
@import "~@/styles/song_item.css";
</style>
