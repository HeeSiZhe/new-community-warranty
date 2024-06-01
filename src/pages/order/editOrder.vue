<template>
  <div class="container">
    <el-button @click="restFn()">返回</el-button>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input placeholder="请输入" v-model="form.orderName" class="input-wrapper"></el-input>
      </el-form-item>
      <el-form-item label="维修类型">
        <el-select v-model="form.orderType" class="input-wrapper">
          <el-option label="电器维修" value="0"></el-option>
          <el-option label="水电维修" value="1"></el-option>
          <el-option label="门窗维修" value="2"></el-option>
          <el-option label="墙面维修" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="form.orderStatus" class="input-wrapper">
          <el-option label="未处理" value="0"></el-option>
          <el-option label="待维修" value="1"></el-option>
          <el-option label="已完成" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="照片">
        <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="restFn()">取消</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>
  
  <script>
import { editOrder } from "../../api/index.js";
import { cloneDeep } from "lodash";
export default {
  name: "editOrder",
  props: { row: Object, restFn: Function },
  data() {
    return {
      form: {
        id: "",
        orderName: "",
        orderType: "",
        orderStatus: "",
      },
    };
  },
  mounted() {
    let nRow = cloneDeep(this.row);
    this.form.id = nRow.id;
    this.form.orderName = nRow.orderName;
    this.form.orderType = nRow.orderType;
    this.form.orderStatus = nRow.orderStatus;
  },
  methods: {
    onSubmit() {
      editOrder(this.form).then((res) => {
        if (res.code === 200) {
          this.tableData = res.data;
          this.$message.success("编辑成功");
          this.restFn();
        }
      });
    },
  },
};
</script>
  
  <style scoped>
</style>