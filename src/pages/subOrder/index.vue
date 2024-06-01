<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input
          placeholder="请输入"
          v-model="form.orderName"
          class="input-wrapper"
        ></el-input>
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
        </el-select>
      </el-form-item>
      <el-form-item label="照片">
        <img v-if="form.orderImage" :src="form.orderImage" alt="Preview Image" />
        <el-upload
          v-else
          :auto-upload="false"
          :on-change="handleFileChange"
          :file-list="fileList"
          :before-upload="beforeUpload"
          :accept="imageTypes"
          list-type="picture"
          class="upload-demo"
          drag
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/jpeg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
import { addOrder } from "../../api/index.js";
export default {
  name: "editOrder",
  data() {
    return {
      fileList: [], // 用于存储文件列表，虽然这里没直接用到，但保留以符合el-upload的一般用法
      imageTypes: ".jpg,.jpeg,.png", // 限制上传的文件类型
      form: {
        orderName: "",
        orderType: "",
        orderStatus: "0",
        orderImage:''// 存储Base64编码的图片URL
      },
    };
  },
  methods: {
    // 当文件改变时被调用
    handleFileChange(file) {
      // 阻止默认上传行为
      if (file.raw) {
        const maxSize = 500 * 1024; // 500KB
        if (file.size > maxSize) {
          this.fileList = [];
          this.$message.error("文件大小不能超过500KB！");
        } else {
          const reader = new FileReader();
          reader.onload = (e) => {
            // 将Base64编码赋值给imageUrl以预览
            this.form.orderImage = e.target.result;
          };
          // 读取文件内容并转化为Base64
          reader.readAsDataURL(file.raw);
        }
      }
    },
    onSubmit() {
      addOrder(this.form).then((res) => {
        if (res.code === 200) {
          this.tableData = res.data;
          this.form = {
            orderName: "",
            orderType: "",
            orderStatus: "0",
            orderImage:''
          };
          this.fileList = [];
          this.$message.success("提交成功");
        }
      });
    },
  },
};
</script>
  
  <style scoped>
</style>