<template>
  <div class="MHelder">
    <!-- <el-row class="title">奇迹冒险岛-新手教程-进阶教程</el-row> -->
    <el-row class="title">
      <span class="fl" @click="()=>$router.push({path:'/'})">回到首页</span>
      测试标题
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MHelder extends Vue {}
</script>

<style scoped lang="scss">
.title {
  font-size: 16px;
  text-align: center;
}
</style>
