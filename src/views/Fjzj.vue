<template>
  <div class="Fjzj">
    <el-row :gutter="20">
      <el-col :span="8">
        <img src="@/assets/fjzj1.png" alt>
        <br>讲解：
        <br>可升级次数：顾名思义，就是目前装备可以砸卷的次数。
        <br>不管卷轴是否成功，都会扣除1次可升级次数。
        <br>如果在砸卷的同时，使用祝福卷或保护卷，可以避免卷轴失败后扣除1次升级次数。
        <br>金锤子次数：所有装备，都可以使用金锤子来提高2次最大升级次数。
      </el-col>
      <el-col :span="8">
        <img src="@/assets/fjzj2.png" alt>
        <br>讲解：
        <br>成功率50%，随机为装备目前有的属性提高1-5点。不会降低装备原有属性值
        <br>适合应用到除武器之外的所有装备。
        <br>
        <br>
        <br>
        <br>
        <img src="@/assets/fjzj3.png" alt>
        <br>讲解：
        <br>随机调整，意思就是，在你装备原有属性上随机调整，随机给予， 0到10的属性
        <br>不会出现负数情况。
      </el-col>
      <el-col :span="8">
        砸卷次数为0时候，即可使用星星，对装备进行强化。
        <br>组队，每日，跑环，都会给予玩家一定数量的星星。
        <br>
        <br>
        <img src="@/assets/fjzj4.png" alt>
        <img src="@/assets/fjzj5.png" alt>
        <br>讲解：
        <br>装备可升级次数为0时，就可用星星来继续强化装备。
        <br>打开强化栏，把装备放上去，就会出现升星操作。
        <br>
        <br>注意：
        <br>装备升星到一定等级时，，可能会出现等级下降，装备损坏等现象，
        <br>在成功几率栏下面会有显示，几率，如果没有显示，就证明不会。
        <br>最好使用强化保护卷
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Fjzj extends Vue {}
</script>
<style lang="scss" scoped>
</style>
