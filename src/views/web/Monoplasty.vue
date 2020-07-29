<template>
    <div class="monoplasty">        
        <slide-verify :l="42"
            :r="10"
            :w="310"
            :h="155"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            :slider-text="text"
            class="canvasBg"
            >
        </slide-verify>
        <div>{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {
            msg: '',
            text: '向右滑',
        }
    },
    methods: {
        onSuccess(){
            this.msg = '登录成功！'
        },
        onFail(){
            this.msg = '登录失败！'
        },
        onRefresh(){
            this.msg = '刷新！'
        }
    }
}
</script>
<style lang="scss" scoped>
.canvasBg{
    background: #fff;
}

</style>
