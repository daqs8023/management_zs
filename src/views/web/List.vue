<template>
  <div class="hello">
    <el-input v-model="input" placeholder="请输入内容" class="toolInput"></el-input>
    <el-select v-model="value" placeholder="请选择" class="toolInput">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="primary" class="toolBtn">查询</el-button>
    <router-link to="/Form">
      <el-button type="success" class="toolBtn">添加</el-button>
    </router-link>
    <div class="container_table">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        border
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="100"></el-table-column>
        <el-table-column prop="sex" :formatter="formatSex" label="性别" sortable width="80"></el-table-column>
        <el-table-column prop="age" label="年龄" sortable width="80"></el-table-column>
        <el-table-column prop="occupation" :formatter="formatOccupation" label="职业" sortable width="100"></el-table-column>
        <el-table-column prop="addr" label="地址" sortable></el-table-column>
        <el-table-column prop="birth" label="出生日期" sortable width="200"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        @current-change="current_change"
        :total="totalNum"
        :current-page="currentPage"
        :page-size="pagesize"
        background
      ></el-pagination>

      <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="职业" prop="occupation">
            <el-select v-model="ruleForm.occupation" placeholder="请选择">
              <el-option
                v-for="item in occList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>  

          <el-form-item label="出生日期" required>
            <el-form-item prop="birth">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.birth"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>

          <el-form-item label="地址" required>
            <el-form-item prop="addr">
              <el-cascader
                :options="ruleForm.optionData"
                v-model="ruleForm.addr"
                @change="handleChange"
                :separator="' '"
              ></el-cascader>
            </el-form-item>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getUserList } from "../../util/api.js";
import optionData from "../../util/country-data.js";
import {
  Button,
  Input,
  Select,
  Option,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Form,
  FormItem,
  Radio,
  RadioButton,
  RadioGroup,
  DatePicker,
  Cascader,
  MessageBox
} from "element-ui";
export default {
  name: "List",
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Pagination.name]: Pagination,
    [Dialog.name]: Dialog,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [DatePicker.name]: DatePicker,
    [Cascader.name]: Cascader,
    [MessageBox.name]:MessageBox
  },
  computed: {
    ...mapState(["currentUser"])
  },
  data() {
    return {      
      input: "",
      options: [
        {
          value: "选项1",
          label: "条件1"
        },
        {
          value: "选项2",
          label: "条件2"
        },
        {
          value: "选项3",
          label: "条件3"
        },
        {
          value: "选项4",
          label: "条件4"
        },
        {
          value: "选项5",
          label: "条件5"
        }
      ],
      value: "",
      totalNum: 0, //默认数据总数
      pagesize: 8, //每页的数据条数
      currentPage: 1, //默认开始页面
      tableData: [], //数据源
      dialogFormVisible: false,
      ruleForm: {
        name: "",
        sex: 0,
        occupation:0,        
        birth: "",
        addr: [],//存放默认值
        optionData: optionData //存放城市数据
      },
      rules: {
        name: [{ required: true, message: "请输入姓名！", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别！", trigger: "change" }],
        birth: [{ required: true, message: "请选择出生日期！", trigger: "blur" }],
        addr: [{ required: true, message: "请选择地址！", trigger: "change" }]
      },
      occList:[
        {
          value:0,
          label:'医生'
        },
        {
          value:1,
          label:'警察'
        },
        {
          value:2,
          label:'老师'
        },
        {
          value:3,
          label:'IT行业'
        }
      ],
    };
  },
  created: function() {
    //获取数据
    getUserList()
    .then(res => {
      console.log(res);
      if (res.status == 200) {
        if (res.data.code == 200) {
          this.tableData = res.data.users;
          //console.log(this.tableData.length);
          this.totalNum = this.tableData.length;
        }
      }
    })
    .catch(err => {
      console.log(err);
    });
  },
  methods: {
    current_change: function(currentPage) {
      console.log(currentPage);
      this.currentPage = currentPage;
    },
    formatSex(row) {
      return row.sex == 0 ? "男" : "女";
    },
    formatOccupation(row){
      switch(row.occupation){
        case 0:
          return '医生';
        case 1:
          return '警察';
        case 2:
          return '老师';
        case 3:
          return 'IT行业';     
      }
    },
    handleEdit(index, row) {
      //编辑
      console.log("aa"+index, row);
      this.dialogFormVisible = true;
      this.ruleForm.name=row.name;
      this.ruleForm.sex=row.sex;
      this.ruleForm.birth=row.birth;
      var mapStr=row.addr;
      console.log(mapStr)
      var mapObj=mapStr.split(" ");
      console.log(mapObj)
      //Array.from(Obj)--对象转数组
      this.ruleForm.addr = Array.from(mapObj);
      console.log(this.ruleForm.addr)
      this.ruleForm.occupation=row.occupation;
    },
    handleDelete(index, row) {
      //删除
      console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message.success("删除成功！");
      }).catch(() => {
        this.$message("已取消删除！");
      });
    },
    submitForm(formName) {
      //保存
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success("修改成功！");
          this.dialogFormVisible = false;
        } else {
          return false;                       
        }
      });
    },
    resetForm(formName) {
      //重置
      this.ruleForm.name='';
      this.ruleForm.sex=0;
      this.ruleForm.birth='';
      this.ruleForm.addr = [];
      this.ruleForm.occupation=0;
    },
    handleChange(value) {
      console.log(value);
      console.log("aa:"+this.ruleForm.addr);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.css";
.toolInput {
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin: 0px 10px;
}
.toolBtn {
  width: 100px;
  margin: 0px 10px;
}
.container_table {
  width: 96%;
  margin: 10px auto;
}

.el-pagination {
  margin-top: 10px;
}
.el-cascader {
  display: block;
}
.el-dialog{
  .el-select{
    display: block;
  }
}
.el-radio-group{
    display: flex;
    margin-top: 10px;
}
</style>
