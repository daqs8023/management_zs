<template>
  <div class="verificationCode">
    <div class="identifybox">
      <div @click="refreshCode">
        <s-identify :identifyCode="identifyCode"></s-identify>
      </div>
      <el-button @click="refreshCode" type="text" class="textbtn">看不清，换一张</el-button>
      <el-input v-model="code"></el-input>
      <el-button type="primary" @click="submitForm">保存</el-button>
    </div>
    <el-row class="wp-list">
        <el-button v-for="item in wpList" :key="item.name" 
        :class="{selectedBg : active == item.name}" 
        @click="selected(item.name)">{{item.name}}</el-button>
    </el-row>
    <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tz&skin=pitaya" frameborder="0" width="100%" height="30" allowtransparency="true"></iframe>
  </div>
</template>
<script>
import SIdentify from "@/components/identify.vue";
import { Button,Input,Row } from "element-ui";
export default {
  name: "verificationCode",
  components: {
    [Button.name]: Button,
    [Input.name]:Input,
    [Row.name]:Row,
    SIdentify
  },
  data() {
    return {
      identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      identifyCode: "",
      code:"",
      wpList: [
        {
          name: '食品饮料'
        },
        {
          name: '鲜花'
        },
        {
          name: '蛋糕'
        },
        {
          name: '水果生鲜'
        },
        {
          name: '服装鞋帽'
        },
        {
          name: '其它'
        }
      ],
      active:''
    };
  },   
  created() {},
  mounted() {
    // 验证码初始化
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  computed: {},
  props: [],
  methods: {    
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
    submitForm(){
        if(this.code != this.identifyCode){
            console.log("你输入的验证码错误！")
        }else{
            console.log("验证成功！")
        }
    },
    selected(name){
      this.active = name;
      console.log(this.active)
    }
  }
};
</script>
<style scoped>
.identifybox {
  /*display: flex;*/
  justify-content: space-between;
  margin-top: 7px;
}
.iconstyle {
  color: #409eff;
}
.selectedBg {
   background: #fd7522;
   border: 1px solid #fd7522;
   color: #fff;
 }
</style>