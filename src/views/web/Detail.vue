<template>
    <div class="drag">
        <vuedraggable class="wrapper" v-model="list">
            <transition-group>
            <div v-for="item in list" :key="item" class="item">
                <p>{{item}}</p>
            </div>
            </transition-group>
        </vuedraggable>
    </div>
</template>
<script>
import vuedraggable from 'vuedraggable';
export default {
    name:'Detail',
    components:{
        vuedraggable
    },
    data(){
        return {
            list: ['1--中国','2--韩国','3--日本','4--泰国','5--印度','6--缅甸']
        }
    },
    methods:{
        
    },
    updated() {
        console.log(this.list)
    },
}
</script>
<style lang="scss" scoped>
.drag{
    width: 100%;
    background: #fff;
    .wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .item{
        width: 300px;
        height: 50px;
        line-height: 50px;
        background-color: #42b983;
        color: #ffffff;
    cursor: pointer;
        margin: 10px auto;
    }
}

</style>
