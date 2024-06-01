<template>
  <div>
    <div v-if="isChange" class="container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.orderName" clearable></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="formInline.status"
            placeholder=""
            class="input-wrapper"
          >
            <el-option label="未处理" value="0"></el-option>
            <el-option label="待维修" value="1"></el-option>
            <el-option label="已完成" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="getOrderListFn()"
            >搜索</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button
            type="warning"
            icon="el-icon-refresh"
            @click="getOrderListFn('reset')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="orderName" label="名称"></el-table-column>
        <el-table-column label="维修类型">
          <template slot-scope="scope">
            <el-column v-if="scope.row.orderType === '0'">电器维修</el-column>
            <el-column v-if="scope.row.orderType === '1'">水电维修</el-column>
            <el-column v-if="scope.row.orderType === '2'">门窗维修</el-column>
            <el-column v-if="scope.row.orderType === '3'">墙面维修</el-column>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.orderStatus === '0'" type="danger"
              >未处理</el-tag
            >
            <el-tag v-if="scope.row.orderStatus === '1'" type="warning"
              >待维修</el-tag
            >
            <el-tag v-if="scope.row.orderStatus === '2'" type="success"
              >已完成</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="图片"
          ><template slot-scope="scope">
            <a  class="table-link" @click="checkImg(scope.row.orderImage)">查看</a>
          </template></el-table-column
        >
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              plain
              type="primary"
              @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              @click="handleClick(scope.row)"
              size="mini"
              plain
              type="danger"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-size="100"
          layout="total,  prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
      <el-dialog
  title="查看照片"
  :visible.sync="dialogVisible"
  :before-close="handleClose">
  <img style="width: 100%;" :src="imgUrl" alt="">
  <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialog">关 闭</el-button>
  </span>
</el-dialog>
    </div>
   
    <editOrder :restFn="restFn" :row="row" v-else />
  </div>
</template>
  
  <script>
import { getOrderList, deleteOrder } from "../../api/index.js";
import editOrder from "./editOrder.vue";
export default {
  components: { editOrder },
  data() {
    return {
      dialogVisible:false,
      imgUrl:'',
      isChange: true,
      tableData: [],
      total: 1000,
      currentPage4: 0,
      formInline: {
        orderName: "",
        status: "",
      },
      row: {},
    };
  },
  mounted() {
    this.getOrderListFn();
  },
  methods: {
    closeDialog(){
      this.dialogVisible = false
      this.imgUrl = ''
    },
    checkImg(imgUrl){
      if(imgUrl){
        this.imgUrl = imgUrl
      this.dialogVisible = true
      }else{
        this.$message.warning('该订单暂未上传图片')
      }
    },
    restFn() {
      (this.isChange = true), this.getOrderListFn();
    },
    handleEdit(row) {
      this.row = row;
      this.isChange = false;
    },
    handleClick(row) {
      const params = { id: row.id };
      this.$confirm("确定删除该订单吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteOrder(params).then((res) => {
            if (res.code === 200) {
              this.$message.success("删除成功");
              this.getOrderListFn();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    getOrderListFn(reset) {
      if (reset) {
        this.formInline = {
          orderName: "",
          status: "",
        };
      }
      getOrderList(this.formInline).then((res) => {
        if (res.code === 200) {
          this.tableData = res.data;
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
  
  <style scoped>
.table-link {
  color: #6190e8;
  text-decoration: none;
}

.table-link:hover {
  cursor: pointer;
  color: rgb(40, 30, 148);
  text-decoration: underline;
}
</style>