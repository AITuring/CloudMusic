// 网站头部
<template>
  <div class="top">
    <div class="home-top">
      <div class="top-fix">
        <img src="@/assets/logo.svg" alt="logo" class="topsvg">
        
      </div>
      <tab bar-active-color="#d43c33" active-color="#d43c33">
        <tab-item selected @on-item-click="setTab('IndexTab')">推荐音乐</tab-item>
        <tab-item @on-item-click="setTab('RankTab')">热歌榜</tab-item>
        <tab-item @on-item-click="setTab('SearchTab')">搜索</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";

export default {
  components: {
    Tab,
    TabItem
  },
  methods: {
    setTab(val) {
      this.$parent.tabName = val;
    }
  }
}
</script>

<style scoped>
.top{
    height: 108px;
}
.vux-tab .vux-tab-item{
    font-size: 15px;
}
.vux-tab-item a{
    display: block;
    width: inherit;
    height: inherit;
}
.home-top{
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: inherit;
}
.top-fix{
    display: flex;
    padding: 0 20px;
    width: 100%;
    height: 64px;
    background-color: #d43c33;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
}
.topsvg{
    width: 142px;
    height: 25px;
    overflow: hidden;
}
.topfr span{
    position: relative;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #fff;
    font-size: 15px;
    border: 1px solid white;
    border-radius: 37.5%/100%;
    cursor: pointer;
}

</style>
