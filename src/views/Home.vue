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
      name: "新人小窍门",
      desc: "一些小窍门",
      path: "xrxqm"
    },
    {
      name: "宠物BUFF加成",
      desc: "宠物BUFF加成说明：学习群宠技能，洗宠物BUFF！",
      path: "cwjc"
    },
    {
      name: "LINK + 角色卡",
      desc: "说简单点就是小号给大号加属性",
      path: "linkJueseka"
    },
    {
      name: "两条项链",
      desc:
        "就比如有的套装4件配属性，项链 戒指 武器 衣服。你有戒指 衣服 项链 没有武器，怎么办？你就可以带2条项链了",
      path: "dbxl"
    },
    {
      name: "洗潜能-1",
      desc: "装备从C级洗到SS级，洗上三条潜能",
      path: "xqn1"
    },
    {
      name: "洗潜能-2",
      desc: "洗附加潜能，下三条",
      path: "xqn2"
    },
    {
      name: "洗潜能-3（无视属性）",
      desc:
        "无视属性的重要性：无视（没有达到100%面板）＞BOSS伤害%＞攻击力%＞伤害%＞主属性%",
      path: "wssx"
    },
    {
      name: "防具砸卷",
      desc: "防具砸卷说明",
      path: "fjzj"
    },
    {
      name: "跑环攻略",
      desc: "内含所需材料，怪物名称等。ctrl+f 搜索即可",
      path: "phgl"
    },
    {
      name: "集合攻略",
      desc: "内含超级属性、装备搭配、机器人制作、BOSS打法、",
      path: "jhgl"
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
