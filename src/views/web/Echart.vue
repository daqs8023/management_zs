<template>
    <div class="echart">
        <v-chart :options="optionsLine"></v-chart>
    </div>
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
export default {
    name:"Echart",
    components:{
        'v-chart':ECharts
    },
    data(){       
        return{
           optionsLine: {}
        }
    },
    mounted(){
        this.optionsLine = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                areaStyle: {}
            }]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
