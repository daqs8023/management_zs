<template>
    <div>
        <textarea :id="id"></textarea>
        <el-button @click="release">发布文章</el-button>
    </div>
</template>
<script>
import {Button} from "element-ui"
import tinymce from 'tinymce/tinymce'
//这下面是tinymce的插件
import 'tinymce/themes/silver/theme'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
//这里写你自己存放语言包的路径
import '../../public/tinymce/langs/zh_CN.js'



export default {
  name:"tinymce-editor",
  components:{
    [Button.name]:Button
  },
  props: {
    id:String
  },
  data() {
    return {
      //初始化配置
      init: {
        selector: '#'+this.id,
        language: 'zh_CN',
        skin_url: 'tinymce/skins/ui/oxide',
        height: 500,
        //插件
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        //工具栏
        toolbar:'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        //隐藏tinymce的标识
        branding: false,
      }
    }
  },
  mounted() {
    //配置的初始化
    tinymce.init(this.init)
  },
  methods: {
    release(){
      //content 是文本内容
      let content = tinymce.get(this.id).getContent();
      //console.log(content);
      this.$emit('release',content)
    }
  },
  beforeDestroy() {
    //销毁
    tinymce.get(this.id).destroy();
  }
}
</script>
<style lang="scss" scoped>
.el-button{
  margin-top: 20px;
}
</style>
