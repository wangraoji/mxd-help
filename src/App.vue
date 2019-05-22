<template>
  <div id="app">
    <el-container>
      <el-header>
        <MHeader/>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- <router-view/> -->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MHeader } from "@/components";
@Component({
  components: {
    MHeader
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">

</style>
