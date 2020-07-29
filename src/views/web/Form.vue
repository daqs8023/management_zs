<template>
  <div class="form">
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
            :options="ruleForm.options"
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
  </div>
</template>
<script>
import options from "../../util/country-data.js";
 
import {
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Radio,
  RadioGroup,
  Button,
  DatePicker,
  Cascader
} from "element-ui";
export default {
  name: "Form",
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Select.name]: Select,
    [Option.name]: Option,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Button.name]: Button,
    [DatePicker.name]: DatePicker,
    [Cascader.name]: Cascader
  },
  data() {
    return {
      ruleForm: {
        name: "",
        sex: 0,
        birth: "",
        addr: "",
        selectedOptions: [], //存放默认值
        options: options //存放城市数据
      },
      rules: {
        name: [{ required: true, message: "请输入姓名！", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别！", trigger: "change" }],
        birth: [{ type: 'date',required: true, message: "请选择出生日期！", trigger: "blur" }],
        addr: [{ required: true, message: "请选择地址！", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log('qqqqq:'+this.ruleForm.birth)
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;                       
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="scss"  scoped>
@import "../../assets/css/common.css";
.el-form {
  width: 480px;
  background: #fff;
  padding: 50px;
  margin: 10px auto;
}
.el-cascader {
  display: block;
}
.el-popper {
  height: 200px;
}
.el-radio-group{
    display: flex;
    margin-top: 10px;
}

</style>

