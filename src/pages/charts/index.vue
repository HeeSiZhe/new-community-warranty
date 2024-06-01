<template>
  <div class="container">
    <div style="display: flex;flex-direction: row">
      <div style="width: 500px; height: 500px">
        <ve-line :data="chartData1" :settings="chartSettings"></ve-line>
      </div>
      <div style="width: 500px;height: 500px;margin-left: 30px">
        <ve-bar :data="chartData2"></ve-bar>
      </div>
    </div>
    <div style="display: flex;flex-direction: row">
      <div style="width: 500px; height: 500px">
        <ve-histogram :data="chartData3"></ve-histogram>
      </div>
      <div style="width: 500px; height: 500px">
        <ve-pie :data="chartData4"></ve-pie>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "charts",
  data() {
    this.chartSettings = {
      metrics: ["水电维修", "电器维修"],
      dimension: ["日期"],
    };
    return {
      chartData1: {
        columns: ["日期", "水电维修", "电器维修", "下单率"],
        rows: [
          { 日期: "1/1", 水电维修: 1393, 电器维修: 1093, 下单率: 0.32 },
          { 日期: "1/2", 水电维修: 3530, 电器维修: 3230, 下单率: 0.26 },
          { 日期: "1/3", 水电维修: 2923, 电器维修: 2623, 下单率: 0.76 },
          { 日期: "1/4", 水电维修: 1723, 电器维修: 1423, 下单率: 0.49 },
          { 日期: "1/5", 水电维修: 3792, 电器维修: 3492, 下单率: 0.323 },
          { 日期: "1/6", 水电维修: 4593, 电器维修: 4293, 下单率: 0.78 },
        ],
      },
      chartData2: {
        columns: ["日期", "门窗维修", "墙面维修", "下单率"],
        rows: [
          { 日期: "1/1", 门窗维修: 1393, 墙面维修: 1093, 下单率: 0.32 },
          { 日期: "1/2", 门窗维修: 3530, 墙面维修: 3230, 下单率: 0.26 },
          { 日期: "1/3", 门窗维修: 2923, 墙面维修: 2623, 下单率: 0.76 },
          { 日期: "1/4", 门窗维修: 1723, 墙面维修: 1423, 下单率: 0.49 },
          { 日期: "1/5", 门窗维修: 3792, 墙面维修: 3492, 下单率: 0.323 },
          { 日期: "1/6", 门窗维修: 4593, 墙面维修: 4293, 下单率: 0.78 },
        ],
      },
      chartData3: {
        columns: ["日期", "未处理", "待维修", "已完成"],
        rows: [
          { 日期: "1/1", 未处理: 1393, 待维修: 1093, 已完成: 3530 },
          { 日期: "1/2", 未处理: 3530, 待维修: 3230, 已完成: 3530 },
          { 日期: "1/3", 未处理: 2923, 待维修: 2623, 已完成: 3530 },
          { 日期: "1/4", 未处理: 1723, 待维修: 1423, 已完成: 3530 },
          { 日期: "1/5", 未处理: 3792, 待维修: 3492, 已完成: 3530 },
          { 日期: "1/6", 未处理: 4593, 待维修: 4293, 已完成: 3530 },
        ],
      },
      chartData4: {
        columns: ["日期", "总维修"],
        rows: [
          { 日期: "1/1", 总维修: 1393 },
          { 日期: "1/2", 总维修: 3530 },
          { 日期: "1/3", 总维修: 2923 },
          { 日期: "1/4", 总维修: 1723 },
          { 日期: "1/5", 总维修: 3792 },
          { 日期: "1/6", 总维修: 4593 },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>