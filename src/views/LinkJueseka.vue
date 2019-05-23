<template>
  <div class="LinkJueseka">
    <el-row class="mb-10">什么是LINK 就是小号给大号加属性 怎么给大号加呢，练到对应的等级，打开0转技能里的技能链，传授给大号就行了，记得回到选角色页面再进一次游戏传授。</el-row>
    <el-row>
      <el-col :span="8">
        <img src="@/assets/link.jpg" alt="link角色卡" class="w100">
      </el-col>
      <el-col :span="12" :offset="1">
        卡片组合 ：(卡片等级看左图)
        <br><br>等级额外BUFF （就是SS ,S,B,A 的组合)
        <br><br>任意三张SS：HP/MP+1000 G/MG+ 5 boss伤害+5%
        <br><br>任意2张SS：1张S HP/MP+500 G/MG+3 boss伤害+3%
        <br><br>任意2张SS：1张A HP/MP+500 G/MG+1
        <br><br>任意2张SS：1张B HP/MP+300
        <br><br>任意2张S1张SS：HP/MP+700 G/MG+3 BOSS伤害+3%
        <br><br>任意3张S：同上
        <br><br>任意2张S/1张A：HP.MP+500 G/MG+1
        <br><br>任意2张S1张B：HP/MP+300
        <br><br>任意2张A/1张SS：HP/MP+500 G/MG+1
        <br><br>任意2张A/1张S：同上
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LinkJueseka extends Vue {}
</script>
<style lang="scss" scoped>
</style>
