<template>
  <div class="Xrxqm">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="desc" label="新人小窍门">
        <template slot-scope="scope">
          <span>{{ scope.row.desc }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Xrxqm extends Vue {
  tableData: any = [
    {
      desc:
        "1. 新手送的10个经验药可以先不吃，后面再吃。练级地图升到160的时候，把新手等级奖励领了，里面有黄金罗盘，用于做寻宝任务"
    },
    {
      desc: `2. 每日任务-每日寻宝-接了任务直接罗盘飞目的地-点消耗品便签-确定地图,10次寻宝做完就是170级还有用寻宝装备穿上`
    },
    {
      desc: `3. 10次寻宝做完就是170级还有用寻宝装备穿上`
    },
    {
      desc: `4. 神奇魔方和高级神奇魔方不花金币，只需要用捡的放大镜鉴定`
    },
    {
      desc: `5. 切记：任何时候，装备好不如潜能好,用小怪爆的魔方碎片兑换魔方先给符号和寻宝装备洗洗潜能`
    },
    {
      desc: `6. 潜能属性：[不管你面板多少，是什么职业，潜能选择优先是下面]无视（没有达到100%面板）＞BOSS伤害%＞攻击力%＞伤害%＞主属性%`
    },
    {
      desc: `7. 双倍掉落卡对新手的成长帮助很大，打钱，打材料，都能发挥最大作用`
    },
    {
      desc: `7.1 每个角色建号后，会送一天的双倍，（每天练一个link号，练完link号后，就把双倍卡丢商城，然后大号拿出来用，在没有理财的情况下可以省下很多抵用，）`
    },
    {
      desc: `8 省钱小窍门: 练联盟和LINK的时候，大号时装可以给小号穿，小号宠物可以存商城给大号用，小号送等级奖励抵用魔方等等给大号用`
    }
    
     
  ];
}
</script>
<style lang="scss" scoped>
</style>
