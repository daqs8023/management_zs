<template>
    <div class="qrcode">
        <h1>二维码生成</h1> 
        <p>当前用户：{{link}}</p>
        <el-button type="primary" @click="createQrcode()">生成二维码</el-button>
        <el-button type="primary" @click="createImage()">生成图片</el-button>
        <div id="qrcode" class="code"></div>
    </div>
</template>
<script>
import QRCode  from "qrcodejs2"
import $ from 'jquery'
import {Button} from "element-ui"
export default {
    name: "Qrcode",
    components:{
        [Button.name]: Button
    },
    data(){
        return{
            link: 'TJA123员工名'
        }
    },
    mounted(){
        
    },
    methods: {
        //生成二维码
        qrcode () {
            let qrcode = new QRCode("qrcode", {
                width: 200,
                height: 200,        // 高度
                text:  this.link,   // 二维码内容
                colorDark: "#000", //二维码颜色
                colorLight: "#fff", //二维码背景色
                correctLevel: QRCode.CorrectLevel.L //容错率，L/M/Q/H
            })
        },
        //生成二维码
        createQrcode(){
            document.getElementById("qrcode").innerHTML = ""
            this.$nextTick (function () {
                this.qrcode()
            })
        },
        //生成图片
        createImage(){
            const img = $("#qrcode").find('img').attr('src')
            console.log(img)
        }
    }
}
</script>
<style lang="scss" scoped>
.qrcode{
    h1{
        font-size: 24px;
        line-height: 50px;
    }
    p{
        font-size: 16px;
        line-height: 30px;
    }
    .code{
        width: 200px;
        height: 200px;
        border: 2px solid #f60;
        margin: 50px auto;
    }
}




.module-content {
    min-width: 320px;
    max-width: 1000px;
    width: 100%;
    color: #000;
    margin: 0 auto;
    padding-left: 10px;
    box-sizing: border-box;
}

.module-head {
    text-align: center;
    font-weight: 500;
    margin: 0;
    font-size: 30px;
    height: 100px;
    line-height: 100px;
    color: #000;
}

.box h3 {
    font-weight: 300;
    margin: 0;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    color: #000;
}

.url-box {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}

#file {
    position: absolute;
    width: 120px;
    height: 120px;
    //opacity: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 10;
}

</style>


