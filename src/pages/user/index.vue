<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-form v-model="tableData" :inline="true" label-width="120px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="用户名 :">
                {{ tableData.username }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="年龄 :">
                  {{ tableData.age }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮箱 :">
                {{ tableData.email }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="手机号 :">
                 {{ tableData.phone }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="地址 :">
                  {{ tableData.address }}
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>订单信息</span>
      </div>
      <div>
        <el-form v-model="tableData" :inline="true" label-width="120px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="已反馈订单 :">
                <span>3单</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="待维修订单 :">
                <span>0单</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="已完成订单 :">
                <span>6单</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getUserInfo } from "../../api/index.js";

export default {
  name: "form-detail",
  data() {
    return {
      tableData: {},
    };
  },
  created() {
    this.getUserInfotFn();
  },
  methods: {
    getUserInfotFn() {
      const id = localStorage.getItem("userId");
      const params = { id: +id };
      getUserInfo(params).then((res) => {
        if (res.code === 200) {
          this.tableData = res.data;
          console.log(" res.data", res);
        }
      });
    },
  },
};
</script>

<style scoped>
.line-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
}
</style>