<template>
    <div class="vueQuillEditor">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" 
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        
        </quill-editor>
        <el-button @click="setEditorContent">获取</el-button>
        <div v-html="str" class="ql-editor">
            {{str}}
        </div>
    </div>
</template>
<script>
import {Button} from "element-ui";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import {quillRedefine} from 'vue-quill-editor-upload'
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';


export default {
    name:"VueQuillEditor",
    components:{
        [quillEditor.name]:quillEditor,
        [quillRedefine.name]:quillRedefine,
        [Button.name]:Button
    },
    data(){
        return{
            content:'<p>hello world!<b>baidu</b></p>',
            editorOption:{
               
            },
            str:''
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    },
    created(){
        this.editorOption = quillRedefine({            
            // 图片上传的设置
            uploadConfig: {
                action: '',  // 必填参数 图片上传地址
                // 必选参数  res是一个函数，函数接收的response为上传成功时服务器返回的数据
                // 你必须把返回的数据中所包含的图片地址 return 回去
                res: (respnse) => {
                    // 这里切记要return回你的图片地址
                    //var w=respnse.msg.img.path.indexOf('upload');                
                    //return 'http://localhost:8080/images/' + respnse.msg.img.path.substring(w);
                    return respnse.info;
                    this.src=respnse.info;//将返回的数据中所包含的图片地址放在src中
                },
                /*methods: 'POST',  // 可选参数 图片上传方式  默认为post
                token: sessionStorage.token,  // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
                name: 'img',  // 可选参数 文件的参数名 默认为img
                size: 500,  // 可选参数   图片限制大小，单位为Kb, 1M = 1024Kb
                accept: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',  // 可选参数 可上传的图片格式
                start: () => { },  // 可选参数 接收一个函数 开始上传数据时会触发
                end: () => { },  // 可选参数 接收一个函数 上传数据完成（成功或者失败）时会触发
                success: () => {},  // 可选参数 接收一个函数 上传数据成功时会触发
                error: () => { }  // 可选参数 接收一个函数 上传数据中断时会触发*/
            }            
        })
        console.log(this.editorOption);
    },
    methods:{
        onEditorReady(editor) { // 准备编辑器

        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        //把实体格式字符串转义成HTML格式的字符串
        escapeStringHTML(str) {
            str = str.replace(/&lt;/g,'<');
            str = str.replace(/&gt;/g,'>');
            return str;
        },
        setEditorContent(){
            
        }
    },
    
    mounted() {
        let content = '';  // 请求后台返回的内容字符串
        this.str = this.escapeStringHTML(content);
    }
}
</script>
<style lang="scss" scoped>
.vueQuillEditor{
    width: 100%;
    background: #fff;
}
</style>
