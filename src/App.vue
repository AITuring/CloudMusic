<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Loading :show="isLoad" :text="loadText"></Loading>
    <Toast text="歌曲暂无版权" type="cancel" :time="1000" :value="isToast" @on-hide="totast"></Toast>
    <MiniPlayer v-show="isMiniPlayer" ref="miniPlayer"></MiniPlayer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Loading, Toast } from "vux";
import MiniPlayer from "@/components/miniPlayer.vue";

export default {
  data() {
    return {
      loadText: "加载中..."
    };
  },
  computed: {
    ...mapGetters(["isLoad", "isMiniPlayer", "isToast"])
  },
  methods: {
    ...mapMutations(["setToast"]),
    totast() {
      this.setToast(false);
    }
  },
  components: {
    MiniPlayer,
    Loading,
    Toast
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: 14px/1.5 Helvetica, sans-serif;
  color: #333;
}
.weui-progress__inner-bar {
  background: #d43c33 !important;
}
</style>
