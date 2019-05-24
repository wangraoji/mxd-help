<template>
  <div class="Dbxl">
    <h3 class="mb-10">两条项链：</h3>
    <el-row :gutter="20">
      <el-col :span="8">
        <div>关于项链同时带2条出现的情况看下图：</div>
        <img src="@/assets/2txl1.jpg" alt>
      </el-col>
      <el-col :span="8">
        细心的玩家，也会发现，我寻宝套，套装显示，我只穿了8件但却触发了9件的套装属性。
        <br>为什么？
        <br>这里就要好好讲讲，
        <br>唯一可以装备相同物品的部位【项链】
        <br>可以同时装备两条相同的装备，
        <br>来达到触发套装属性的效果。
        <br>戒指就不行，比如：
        <br>最高贝戒指，只能装备一个，不能装备第二个，
        <br>如图：最高贝套装
        <br>
        <img src="@/assets/2txl2.jpg" alt>
        <br>我可以选择，同时带2条最高贝项链，不用带最高贝腰带，也能触发4件套属性
      </el-col>
      <el-col :span="8">
        重点来了：项链扩充，在商城，游戏栏，扩充后，才能同时装备2条项链
        <br>
        <img src="@/assets/2txl3.jpg" alt>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Dbxl extends Vue {}
</script>
<style lang="scss" scoped>
</style>
