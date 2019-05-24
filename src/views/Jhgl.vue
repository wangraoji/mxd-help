<template>
  <div class="Jhgl">
    <div>
      <div class="fl">
        <p>超级属性</p>
        <img src="@/assets/cjsx.jpg" alt>
      </div>
      <br clear="both">
    </div>
    <div>
      <div class="fl">
        <p>新手装备前期搭配</p>
        <img src="@/assets/zbdp1.jpg" alt>
      </div>
      <div class="fl">
        <p>终极第一种搭配方案</p>
        <img src="@/assets/zbdp2.jpg" alt>
      </div>
      <div class="fl">
        <p>终极第二种搭配方案</p>
        <img src="@/assets/zbdp3.jpg" alt>
      </div>
      <br clear="both">
    </div>
    <div>
      <div class="fl">
        <p>机器人制作</p>
        <img src="@/assets/jqrzz.jpg" alt>
      </div>
      <br clear="both">
    </div>
    <div class="fl">
      <p>贝勒德打法</p>
      <img src="@/assets/bld.png" alt>
    </div>
    <div class="fl">
      <p>四傻BOSS打法</p>
      <img src="@/assets/4SBOOS.jpg" alt>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Jhgl extends Vue {}
</script>
<style lang="scss" scoped>
.fl {
  margin-left: 20px;
  margin-bottom: 20px;
  border: 1px solid #c9c9c9;
  p {
    padding: 0 15px;
    font-weight: bold;
    line-height: 30px;
    color: red;
  }
}
</style>
