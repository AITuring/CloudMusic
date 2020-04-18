<template>
  <div class="comment_item">
    <div class="cmt_img">
      <img v-lazy="data.avatarUrl" alt="头像" />
    </div>
    <div class="cmt_wrap">
      <div class="cmt_header">
        <div class="cmt_info">
          <span class="cmt_username">{{ data.username }}</span>
          <span class="cmt_time">{{ data.time }}</span>
        </div>
        <div class="cmt_like">
          <span>{{ data.likedCount }}</span>
          <i><img src="@/assets/like.svg" alt="点赞"></i>
        </div>
      </div>
      <div class="cmt_content">
        <span>{{ data.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
@import url('~@/styles/comment.css');
</style>
