<template>
  <div class="tab1-container">
    <h4>Dialog 对话框</h4>
    <el-button type="text" @click="dialogVisible = true">打开对话 Dialog</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是杰尼龟和石斑鱼的一段对话信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <hr>
    <h4>Popover 弹出框</h4>
    <el-popover placement="right" width="600" trigger="click" visible-arrow>
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button slot="reference">打开弹出 Popover</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'Tab1',
  data() {
    return {
      dialogVisible: false,
      gridData: [{
        date: '2016-05-02',
        name: '杰尼龟',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '石斑鱼',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
    }
  }
};
</script>

<style lang="less" scoped>
.tab1-container {
  min-height: 150px;
  background-color: greenyellow;
}
</style>
