import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'Home',
            component:() => import('./views/Home.vue'),
            children:[
                {
                    path:'/List',
                    name:'List',
                    components:{
                        centerPanel:() => import('./views/web/List.vue')
                    } 
                },
                {
                    path:'/Form',
                    name:'Form',
                    components:{
                        centerPanel: () => import('./views/web/Form.vue')
                    }
                },
                {
                    path:'/Detail',
                    name:'Detail',
                    components:{
                        centerPanel: () => import('./views/web/Detail.vue')
                    }
                },
                {
                    path:'/Drag',
                    name:'Drag',
                    components:{
                        centerPanel: () => import('./views/web/Drag.vue')
                    }
                },
                {
                    path:'/Echart',
                    name:'Echart',
                    components:{
                        centerPanel: () => import('./views/web/Echart.vue')
                    }
                },
                {
                    path:'/VueEditor',
                    name:'VueEditor',
                    components:{
                        centerPanel: () => import('./views/web/VueEditor.vue')
                    }
                },
                {
                    path:'/TinymceEditor',
                    name:'TinymceEditor',
                    components:{
                        centerPanel: () => import('./views/web/TinymceEditor.vue')
                    }
                },
                {
                    path:'/Ckeditor',
                    name:'Ckeditor',
                    components:{
                        centerPanel: () => import('./views/web/Ckeditor.vue')
                    }
                },
                {
                    path:'/Ueditor',
                    name:'Ueditor',
                    components:{
                        centerPanel: () => import('./views/web/Ueditor.vue')
                    }
                },
                {
                    path:'/VueQuillEditor',
                    name:'VueQuillEditor',
                    components:{
                        centerPanel: () => import('./views/web/VueQuillEditor.vue')
                    }
                },
                {
                    path:'/Upload',
                    name:'Upload',
                    components:{
                        centerPanel: () => import('./views/web/Upload.vue')
                    }
                },
                {
                    path:'/Monoplasty',
                    name:'Monoplasty',
                    components:{
                        centerPanel: () => import('./views/web/Monoplasty.vue')
                    }
                },
                {
                    path:'/TestDrag',
                    name:'TestDrag',
                    components:{
                        centerPanel: () => import('./views/web/TestDrag.vue')
                    }
                },
                {
                    path:'/Progress',
                    name:'Progress',
                    components:{
                        centerPanel:() => import('./views/web/Progress.vue')
                    } 
                },
                {
                    path:'/VerificationCode',
                    name:'VerificationCode',
                    components:{
                        centerPanel:() => import('./views/web/VerificationCode.vue')
                    } 
                },
                {
                    path:'/TreeTable',
                    name:'TreeTable',
                    components:{
                        centerPanel:() => import('./views/web/TreeTable.vue')
                    }
                },
                {
                    path:'/Video',
                    name:'Video',
                    components:{
                        centerPanel:() => import('./views/web/Video.vue')
                    }
                },
                {
                    path:'/Qrcode',
                    name:'Qrcode',
                    components:{
                        centerPanel:() => import('./views/web/Qrcode.vue')
                    }
                },
                {
                    path:'/PdfView',
                    name:'PdfView',
                    components:{
                        centerPanel:() => import('./views/web/PdfView.vue')
                    }
                },
                {
                    path:'/MonacoEditor',
                    name:'MonacoEditor',
                    components:{
                        centerPanel:() => import('./views/web/MonacoEditor.vue')
                    }
                },
                {
                    path:'/FlowChart',
                    name:'FlowChart',
                    components:{
                        centerPanel:() => import('./views/web/FlowChart.vue')
                    }
                }
            ]
        },        
        {
            path:'/Login',
            name:'Login',
            component:() => import('./views/Login.vue')
        }
    ]
})


