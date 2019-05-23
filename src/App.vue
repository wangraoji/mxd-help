<template>
  <div id="app" class="h100">
    <el-container class="h100">
      <el-header>
        <MHeader/>
      </el-header>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
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
