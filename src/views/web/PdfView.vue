<template>
    <div class="pdfView">
        <div class="title">
            <h1>PDF在线浏览</h1>
            <el-button type="primary" @click="showPDF()">查看PDF文件</el-button>
        </div>
        
        <div class="wrap">            
            <iframe :src="pSrc" width="100%" height="100%" v-show="showIframe"></iframe>
        </div>
    </div>
</template>
<script>
import {Button} from "element-ui"
export default {
    name: "PdfView",
    components:{
        [Button.name]: Button
    },
    data(){
        return{
            pSrc:'',
            showIframe:false
        }
    },
    mounted: function() {
      this.loadPDF();
    },
    methods: {
      loadPDF() {
        //baseurl ：pdf存放的文件路径，可以是本地的，也可以是远程，这个是远程的，亲测可以用
        //let baseurl = 'http://image.cache.timepack.cn/nodejs.pdf';
        let baseurl = 'demo.pdf'
        //ie有缓存加个随机数解决  + '?r=' + new Date()
        let pSrc = baseurl + '?r=' + new Date();
        console.log(pSrc)
        this.pSrc = '../../plugin/pdf/web/viewer.html?file=' + encodeURIComponent(pSrc) + '.pdf';
        console.log(encodeURIComponent(pSrc))
        console.log(this.pSrc)
      },
      showPDF(){
          this.showIframe=true
      }
    }    
}
</script>
<style lang="scss" scoped>
.title{
    width: 100%;
    height: 80px;
    background: #f60;
}
.wrap{
  position: absolute;
  top: 100px;
  left: 0px;
  width: 100%;
  bottom: 0px;
}
</style>