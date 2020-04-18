<template>
  <div class="foot">
    <div class="foot-wrapper">
      <div class="foot-logo">
        <img src="@/assets/foot.svg" alt="logo" class="logosvg">
      </div>
  </div>
</div>  
</template>

<script>
export default {
}
</script>

<style scoped>

.logosvg{
    display: block;
    margin: 0 auto;
    width: 230px;
    height: 44px;
}
.foot-logo{
    padding-top: 12%;
}
.foot{
    position: relative;
    padding-top: 53.3%;
    margin-top: 4px;
    background: url("~@/assets/footbg.png") no-repeat;
    background-size: contain;
}
.foot-wrapper{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    text-align: center;
}
</style>
