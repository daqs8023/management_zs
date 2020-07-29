<template>
    <div class="vueEditor">
      <vue-editor 
        v-model="content"         
        @focus="onEditorFocus"
        @blur="onEditorBlur"
        @selection-change="onSelectionChange"/>
      <el-button @click="setEditorContent">设置</el-button>
      <div class="mesBox">{{ content }}</div>
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import { Button } from "element-ui";
import axios from 'axios'
export default {
  name:"Ueditor",  
  components: { 
    [VueEditor.name]:VueEditor,
    [Button.name]:Button 
  },
  data(){
    return{
      //content: "<h1>Some initial content</h1>",
      content:null
    }
  },
  methods:{
    setEditorContent() {
      //设置
      this.content = "<h1>Html For Editor</h1>";
    },
    onEditorFocus(quill) {
      //得到焦点
      console.log("editor focus!", quill);
    },
    onEditorBlur(quill) {
      //失去焦点
      console.log("editor blur!", quill);
    },    
    onSelectionChange(range) {
      //选择变化
      console.log("selection change!", range);
    }
  }
}
</script>
<style lang="scss" scoped>
.vueEditor{
  background: #ffffff;
  padding: 20px;
  .quillWrapper{
    margin: 20px auto;
  }
  .mesBox{
    border: 1px solid #cbcbcb;
    background: #f8f8f8;
    margin: 20px auto;
    padding: 20px;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  } 
}
</style>
