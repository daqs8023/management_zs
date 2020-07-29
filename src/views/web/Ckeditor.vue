<template>
  <div class="ckeditor">
    <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
    <div id="toolbar-container"></div>
    <div class="editorBg" id="editor">
      <p>This is the initial editor content.</p>
  </div>
  </div>
</template>
<script>
//import CKEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn' 
export default {
    name:"Ckeditor",    
    data() {
        return {
            // editor: ClassicEditor,
            // editorData: '<p>Content of the editor.</p>',
            // editorConfig: {
            //     // The configuration of the editor.
            // }
            editor:null,//编辑器实例
        }
    },
    mounted() {
      this.initCKEditor()
    },
    methods: {
      initCKEditor() {
        CKEditor.create(document.querySelector('#editor'), {
          removePlugins: ['MediaEmbed'], //除去视频按钮
          language: 'zh-cn',  // 中文
          ckfinder: {
            uploadUrl: '/admin/Upload/uploadUrl'
            //后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
          }
          }).then(editor => {
            const toolbarContainer = document.querySelector('#toolbar-container');
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
          }).catch(error => {
            console.error(error);
          });
      }
    }  
}
</script>
<style lang="scss" scoped>
.editorBg{
  height: 600px;
  background: #fff;
}
</style>