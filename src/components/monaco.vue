<template>
  <div class="monaco-container">
    <div ref="container" class="monaco-editor"></div>
    <el-button @click="getData">获取代码</el-button>
  </div>
</template>

<script>
import * as monaco from "monaco-editor"
import {Button} from "element-ui"
export default {
  components:{
    [Button.name]: Button
  },
  props: {
    // 编辑器中呈现的内容
    codes: {
      type: String,
      default: function() {
        return "";
      }
    },
    readOnly: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    // 主要配置
    editorOptions: {
      type: Object,
      default: function() {
        return {
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false, // 只读
          cursorStyle: "line", // 光标样式
          automaticLayout: false, // 自动布局
          glyphMargin: true, // 字形边缘
          useTabStops: false,
          fontSize: 28, // 字体大小
          autoIndent: false, // 自动布局
        }
      }
    }
  },
  mounted () {
        this.monacoEditor = monaco.editor.create(this.$refs.container, {
        value: this.codes, // 见props
        language: 'python',
        theme: 'vs-dark', // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
        editorOptions: this.editorOptions // 同codes
    })
  },
  methods:{
    getData(){
      //获取内容
      const content = this.monacoEditor.getValue()   
      console.log(content)
    }
  }
}
</script>
<style lang="scss" scoped>
.monaco-editor {
  width: 800px;
  height: 500px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  text-align: left;
}
</style>
