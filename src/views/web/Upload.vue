<template>
    <div class="upload">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"  
            :on-success="onSuccess"
            :on-error="onError"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>   
        </el-upload>
    </div>
</template>
<script>
import {Button,Upload} from "element-ui";
export default {
    name: 'HelloWorld',
    components:{
        [Button.name]:Button,
        [Upload.name]:Upload
    },
    data(){
        return{
            imageUrl: '',
            resData:{
            }
        }
    },
    methods:{
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }else if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        onSuccess(res,file){  
            //成功   
            this.imageUrl = URL.createObjectURL(file.raw);
            console.log(file.raw);
            console.log(this.imageUrl);
            // if(res.status==200){
            //     this.imageUrl = URL.createObjectURL(file.raw);
            // } 
            this.$message.success('上传成功!');           
        },
        onError(res,file){
            this.$message.error('上传失败!');
        }      
    }
}
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px solid #cbcbcb;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.el-button{
    margin: 20px auto;
}
</style>
