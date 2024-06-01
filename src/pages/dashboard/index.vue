<template>
  <div class="container">
    <!-- <el-row :gutter="15">
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-notebook-2" style="color: #FE8823; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">基本表格</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-reading" style="color: #EA6646; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">基本表单</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-s-help" style="color: #7687F1; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">表单详情</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-s-grid" style="color: #4FD3BE; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">markdown</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-upload" style="color: #E6A23C; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">文件上传</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-discover" style="color: #F56C6C; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">自定义图标</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-pie-chart" style="color: #FF7361; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">charts图标</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-aim" style="color: #65CCED; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">国际化</div>
          </div>
        </el-card>
      </el-col>
    </el-row> -->

    <div style="margin-top: 20px">
      <el-row :gutter="15">
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>用户总数</span>
              <el-tooltip style="float:right" content="用户总数" placement="top-start">
                <i class="el-icon-user" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="font-size: 30px;color: #515a6e">500人</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>总维修数</span>
              <el-tooltip style="float:right" content="总维修数" placement="top-start">
                <i class="el-icon-document" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="font-size: 30px;color: #515a6e">2231单</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>今日完成维修数</span>
              <el-tooltip style="float:right" content="今日完成维修数" placement="top-start">
                <i class="el-icon-view" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="margin-top: 20px">
              <el-progress :stroke-width="20" :percentage="32"></el-progress>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>今日反馈数</span>
              <el-tooltip style="float:right" content="今日销售额" placement="top-start">
                <i class="el-icon-s-promotion" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="color: #6190e8;font-size: 30px">82条</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 20px">
      <el-row :gutter="15">
        <el-col :span="12">
          <el-card>
            <ve-line :data="chartData1" :settings="chartSettings"></ve-line>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <ve-histogram :data="chartData2"></ve-histogram>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    this.chartSettings = {
      metrics: ["水电维修", "门窗维修"],
      dimension: ["日期"],
    };
    return {
      chartData1: {
        columns: ["日期", "水电维修", "门窗维修"],
        rows: [
          { 日期: "1/1", 水电维修: 2530, 门窗维修: 230 },
          { 日期: "1/2", 水电维修: 3530, 门窗维修: 530 },
          { 日期: "1/3", 水电维修: 2923, 门窗维修: 923 },
          { 日期: "1/4", 水电维修: 1723, 门窗维修: 723 },
          { 日期: "1/5", 水电维修: 3792, 门窗维修: 792 },
          { 日期: "1/6", 水电维修: 4593, 门窗维修: 493 },
          { 日期: "1/7", 水电维修: 4593, 门窗维修: 193 },
          { 日期: "1/8", 水电维修: 4593, 门窗维修: 293 },
          { 日期: "1/9", 水电维修: 593, 门窗维修: 593 },
          { 日期: "1/10", 水电维修: 493, 门窗维修: 293 },
          { 日期: "1/11", 水电维修: 1593, 门窗维修: 593 },
          { 日期: "1/12", 水电维修: 4593, 门窗维修: 593 },
        ],
      },
      chartData2: {
        columns: ["日期", "电器维修", "墙面维修"],
        rows: [
          { 日期: "1/1", 电器维修: 1393, 墙面维修: 1093 },
          { 日期: "1/2", 电器维修: 3530, 墙面维修: 3230 },
          { 日期: "1/3", 电器维修: 2923, 墙面维修: 2623 },
          { 日期: "1/4", 电器维修: 1723, 墙面维修: 1423 },
          { 日期: "1/5", 电器维修: 3792, 墙面维修: 3492 },
          { 日期: "1/6", 电器维修: 4593, 墙面维修: 4293 },
        ],
      },
    };
  },
};
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>