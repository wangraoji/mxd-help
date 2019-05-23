<template>
  <div class="home">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="教程" width="200">
        <template slot-scope="scope">
          <a :href="'/' + scope.row.path" class="link">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="desc" label="教程说明"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  tableData: any = [
    {
      name: "宠物BUFF加成",
      desc: "宠物BUFF加成说明：学习群宠技能，洗宠物BUFF！",
      path: "cwjc"
    },
    {
      name: "LINK + 角色卡",
      desc: "说简单点就是小号给大号加属性",
      path: "linkJueseka"
    }
  ];
}
</script>
<style lang="scss" scoped>
.home {
  .link {
    color: blue;
  }
}
</style>
