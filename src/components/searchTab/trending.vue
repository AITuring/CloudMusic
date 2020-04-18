<template>
  <div class="hot-list">
    <h3>热门搜索</h3>
    <ul class="list">
      <li
        class="hot-word"
        v-for="item in hotWord"
        :key="item.first"
        @click="$emit('hot-search',item.first)"
      >
        <a href="javascript:void(0);">{{ item.first }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    hotWord: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped>
.hot-word {
  position: relative;
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 14px;
  font-size: 14px;
  line-height: 32px;
  color: #333;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 37.5%/100%;
  cursor: pointer;
}
.hot-list {
  padding: 15px 10px 0;
  text-align: left;
}
.hot-list h3 {
  font-size: 12px;
  line-height: 12px;
  color: #666;
}
.list {
  margin: 10px 0 7px;
}
</style>
