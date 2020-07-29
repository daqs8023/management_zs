<template>
  <div class="components-container">    
    <el-button @click="getUEContent()">获取内容</el-button>
    <el-button @click="getUEContentTxt()">获取无文本内容</el-button> 
    <div class="ueditorBg">
      <vue-ueditor-wrap v-model="msg" :config="myConfig" ref="ue"></vue-ueditor-wrap>
    </div>
    <div class="preview" v-html="msg"></div>
  </div>
</template>

<script>
import VueUeditorWrap from '../../components/vue-ueditor-wrap.vue';
import {Button,Notification} from 'element-ui';

export default {
  components: {
    VueUeditorWrap,
    [Button.name]:Button,
    [Notification.name]:Notification
  },
  data () {
    return {
      msg: '',
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 200,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // UEditor 资源文件的存放路径
        UEDITOR_HOME_URL: '/UEditor/',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://35.201.165.105:8000/controller.php'
      }
    };
  },
  methods: {
    getUEContent() {
      let content = this.$refs.ue.getUEContent(); // 调用子组件方法
      Notification({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      });
      console.log(content)
    },
    getUEContentTxt() {
      let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
      Notification({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      });
      console.log(content)
    }

  }
};
</script>
<style>
.ueditorBg{
  width: 100%;
  margin: 20px auto;
}
.preview{
  border-radius: 5px;
  line-height: 20px;
  padding: 20px;
  margin: 10px auto;
  border: 1px solid #cbcbcb;
  background-color: #f8f8f8;
}
</style>