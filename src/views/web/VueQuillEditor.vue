<template>
    <div class="vueQuillEditor">
        <el-upload
            class="avatar-uploader"
            :action="serverUrl"
            name="img"
            :headers="header"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :before-upload="beforeUpload">
        </el-upload>
        <el-row v-loading="loading">
            <quill-editor 
                v-model="detailContent" 
                ref="myQuillEditor" 
                :options="editorOption" 
                @blur="onEditorBlur($event)" 
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">        
            </quill-editor>
        </el-row>
    </div>
</template>
<script>
import {Button,Upload,Row,Loading,Message} from "element-ui";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

// 工具栏配置
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{'header': 1}, {'header': 2}],               // custom button values
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
  [{'direction': 'rtl'}],                         // text direction

  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
  [{'header': [1, 2, 3, 4, 5, 6, false]}],

  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
  [{'font': []}],
  [{'align': []}],
  ['link', 'image', 'video'],
  ['clean']                                         // remove formatting button
]

export default {
    name:"VueQuillEditor",
    components:{
        [quillEditor.name]:quillEditor,
        [Button.name]:Button,
        [Upload.name]:Upload,
        [Row.name]:Row,
        [Loading.name]:Loading
    },
    data(){
        return{
            loading: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示    
            serverUrl: '',  // 这里写你要上传的图片服务器地址
            header: {token: sessionStorage.token},  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
            detailContent: '<p>hello world!<b>baidu</b></p>', // 富文本内容            
            editorOption:{
               placeholder: '',
               theme: 'snow',  // or 'bubble'
               modules:{
                   toolbar:{
                       container: toolbarOptions,  // 工具栏
                       handlers:{
                            'image': function (value) {
                                if (value) {
                                    document.querySelector('.avatar-uploader input').click()
                                } else {
                                    this.quill.format('image', false);
                                }
                            }
                       }
                   }
               }
            }
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    },
    created(){
        
    },
    methods:{
        onEditorReady(editor) { // 准备编辑器

        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        // 富文本图片上传前
        beforeUpload() {
            // 显示loading动画
            this.loading = true
        },
        
        uploadSuccess(res, file) {
            // res为图片服务器返回的数据
            // 获取富文本组件实例
            let quill = this.$refs.myQuillEditor.quill
            // 如果上传成功
            if (res.code === '200' && res.info !== null) {
                // 获取光标所在位置
                let length = quill.getSelection().index;
                // 插入图片  res.info为服务器返回的图片地址
                quill.insertEmbed(length, 'image', res.info)
                // 调整光标到最后
                quill.setSelection(length + 1)
            } else {
                this.$message.error('图片插入失败')
            }
            // loading动画消失
            this.loading = false
        },
    
        // 富文本图片上传失败
        uploadError() {
            // loading动画消失
            this.loading = false
            this.$message.error('图片插入失败')
        }
    },
}
</script>
<style lang="scss" scoped>
.vueQuillEditor{
    width: 100%;
    background: #fff;
}
</style>
