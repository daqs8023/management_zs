<template>
    <div class="login">
        <el-form :model="form" :rules="rules" ref="form" label-width="0" class="login2">
            <h1>登录</h1>
            <el-form-item prop="username">
                <el-input type="text" prefix-icon="iconfont icon-yonghu" v-model="form.username" placeholder="账号" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="text" prefix-icon="iconfont icon-mima" v-model="form.password" placeholder="密码" clearable show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { Login } from '../util/api.js'
import { Form,FormItem,Input,Button } from 'element-ui';
export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { 
                        required: true,
                        message: '请输入账号', 
                        trigger: 'blur'
                    },
                ],
                password: [
                    { 
                        required: true,
                        message: '请输入密码', 
                        trigger: 'blur' 
                    }
                ]
            }
        }
    },
    components:{
        [Form.name]:Form,
        [FormItem.name]:FormItem,
        [Input.name]:Input,
        [Button.name]:Button
    },
    methods: {
        handleSubmit() {
            this.$refs.form.validate(valid => {
                if(valid) {
                    let param = { 
                        "username": this.form.username,
                        "password": this.form.password 
                    }
                    Login(param)
                    .then(res => {
                        //console.log(res);
                        if(res.status == 200 ){
                            if(res.data.code == 200){
                                this.$message.success(res.data.user.name);
                                this.$store.dispatch('setCurrentUser',res.data.user);
                                this.$router.push({ path: '/'});
                            }
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                } else {
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login2 {
    height: 100%;
    width: 60%;
    h1{
        width: 100%;
        height: 30px;
        margin: 10px  auto;
        font-size:20px; 
    }
    .el-form-item{
        width: 300px;
        margin: 20px  auto;
    }
}
</style>