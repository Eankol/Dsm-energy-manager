let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');

export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        edatas:[]
      }
    },
    mounted () {
        this.echartIn(this.edatas);
    },
    methods: {
        echartIn(edata){
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: edata,
                }]
            });
        },
        slcData(){
            let a = Math.random()*100;
            this.edatas=[5, 20, 36, a, 10]
            this.echartIn(this.edatas);
            swal("查询成功！");
        }
    }
  }