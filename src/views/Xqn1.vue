<template>
  <div class="Xqn1">
    <el-row :span="20">
      <el-col :span="8">
        一、装备从C级洗到SS级开始需要物品：
        <br>物品1 卷《野怪掉落》(开潜能)：
        <img src="@/assets/xqn1-1.png" alt>
        <br>物品2 魔方《在线奖励，等级奖励，各种奖励，怪物掉落，BOSS掉落，》(洗潜能)：
        <img src="@/assets/xqn1-2.png" alt>
        <br>物品3 需要洗的装备
        <img src="@/assets/xqn1-3.png" alt>
      </el-col>
      <el-col :span="8">
        二、可以看到我的装备，没有潜能就要使用潜能卷，给装备添加上潜能
        <img src="@/assets/xqn1-4.png" alt>
        <img src="@/assets/xqn1-5.png" alt>
        到这里我的潜能就出来了，但只有两条，我们要开3条！用印章可以让潜能变成三条。
        <img src="@/assets/xqn1-6.png" alt>
      </el-col>
      <el-col :span="8">
        三、然后我们开始洗了！双击魔方，点装备，洗着，洗着，就变成S了，继续洗可以让他变成最高等级SS。
        <img src="@/assets/xqn1-7.png" alt>
        <img src="@/assets/xqn1-8.png" alt>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Xqn1 extends Vue {}
</script>
<style lang="scss" scoped>
</style>
