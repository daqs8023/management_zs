<template>
    <div class="home">
        <el-container>
            <!-- 头部 -->
            <el-header>
                <el-row>
                <el-col :span="12">
                    <div class="logo">
                    <img src="../assets/img/logo.png" />
                    <span>后台管理系统</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="loginBg">
                    <router-link to="/Home">
                        <span class="pointBtn">
                        <i class="iconfont icon-shouye"></i>首页
                        </span>
                        </router-link>
                    <span>
                        <i class="iconfont icon-yonghu"></i>用户名：<b>{{ currentUser.name }}</b>
                    </span>
                    <span class="pointBtn">
                        <i class="iconfont icon-exit"></i>退出
                    </span> 
                    </div>            
                </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        :default-openeds="['1','2']">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span>导航一</span>
                            </template>
                            <router-link to="/FlowChart">
                                <el-menu-item index="2-12">流程图形编辑器</el-menu-item>
                            </router-link>
                            <router-link to="/MonacoEditor">
                                <el-menu-item index="2-11">代码文本编辑器</el-menu-item>
                            </router-link>
                            <router-link to="/PdfView">
                                <el-menu-item index="2-10">PDF在线浏览</el-menu-item>
                            </router-link>
                            <router-link to="/Qrcode">
                                <el-menu-item index="2-9">二维码</el-menu-item>
                            </router-link>
                            <router-link to="/List">
                                <el-menu-item index="1-1">列表</el-menu-item>
                            </router-link>
                            <router-link to="/Detail">
                                <el-menu-item index="1-2">拖拽排序</el-menu-item>
                            </router-link>
                            <router-link to="/VueEditor">
                                <el-menu-item index="1-3">VueEditor编辑器</el-menu-item>
                            </router-link>                        
                            <router-link to="/Ueditor">
                                <el-menu-item index="1-4">富文本编辑器</el-menu-item>
                            </router-link>
                            <router-link to="/Upload">
                                <el-menu-item index="1-5">上传图片</el-menu-item>
                            </router-link>
                            <router-link to="/TinymceEditor">
                                <el-menu-item index="1-6">TinymceEditor编辑器</el-menu-item>
                            </router-link> 
                            <router-link to="/Ckeditor">
                                <el-menu-item index="1-7">Ckeditor编辑器</el-menu-item>
                            </router-link> 
                            <router-link to="/VueQuillEditor">
                                <el-menu-item index="1-8">VueQuillEditor编辑器</el-menu-item>
                            </router-link>
                        </el-submenu>
                        

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>导航二</span>
                            </template>
                            <router-link to="/Drag">
                                <el-menu-item index="2-1">拖拽移动</el-menu-item>
                            </router-link>
                            <router-link to="/Echart">
                                <el-menu-item index="2-2">Echart图表</el-menu-item>
                            </router-link>
                            <router-link to="/Monoplasty">
                                <el-menu-item index="2-3">滑动验证码</el-menu-item>
                            </router-link>
                            <router-link to="/TestDrag">
                                <el-menu-item index="2-4">测试拖拽</el-menu-item>
                            </router-link>
                            <router-link to="/Progress">
                                <el-menu-item index="2-5">进度条</el-menu-item>
                            </router-link>
                            <router-link to="/VerificationCode">
                                <el-menu-item index="2-6">验证码</el-menu-item>
                            </router-link>
                            <router-link to="/TreeTable">
                                <el-menu-item index="2-7">树形表格拖拽</el-menu-item>
                            </router-link>
                            <router-link to="/Video">
                                <el-menu-item index="2-8">视频</el-menu-item>
                            </router-link>                            
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                <router-view name="centerPanel"></router-view>
                </el-main>
            </el-container>
        </el-container>  
    </div>
</template>
<script>
import {Container,Header,Aside,Main,Row,Col,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui';
import {mapState} from 'vuex';
export default {
    name:'home',
    components:{
        [Container.name]:Container,
        [Header.name]:Header,
        [Aside.name]:Aside,
        [Main.name]:Main,
        [Row.name]:Row,
        [Col.name]:Col,
        [Menu.name]:Menu,
        [Submenu.name]:Submenu,
        [MenuItem.name]:MenuItem,
        [MenuItemGroup.name]:MenuItemGroup
    },
    computed:{
        ...mapState(["currentUser"])
    },
    created(){
        //console.log("currentUser:"+this.currentUser.id);
        // if(this.currentUser.id == undefined){
        //     //console.log(1);
        //     this.$router.push('/Login');
        // }else{
        //     //console.log(2);
        // }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/css/common.css";


.el-header {
  width: 100%;
  height: 60px;
  background-color: #E9EEF3;
  position: absolute;
  top: 0px;
}

.el-aside {
  background-color: #D3DCE6;
  position: absolute;
  top: 60px;
  bottom: 0px;
}

.el-main {
  background-color: #B3C0D1;
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 200px;
  right: 0px;
}
.logo{
  width: 100%;
  height: 60px;
  line-height: 60px;  
  display: flex; 
}
.logo img{
  width: 88px;
  height: 50px;
  margin-top: 5px;
}
.logo span{
  margin-left:10px; 
  font-size:20px;
  color: #a63745; 
}
.loginBg{
  width: 100%;
  height: 60px;
  line-height: 60px; 
  text-align: right;
}
.loginBg i{
  margin: 0px 5px 0px 10px;
}
.pointBtn{
  cursor: pointer;
}
</style>
