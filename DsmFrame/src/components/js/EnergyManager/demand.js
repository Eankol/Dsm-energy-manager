
export default{
    data () {
        return {
            myChart:null,
        }
    },
    mounted () {
        this. echartIn();
    },
    methods: {
        echartIn(){
            this.myChart=this.$echarts.init(document.getElementById('main'));
            var option = { 
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter:function(value){
                        return JSON.stringify(value)
                    }()
                },
                legend: {
                    data:['水','电','气']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['03-11','03-12','03-13',
                        '03-14','03-15','03-16','03-17']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'水',
                        type:'bar',
                        stack: '2018',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'气',
                        type:'bar',
                        stack: '2018',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'电',
                        type:'bar',
                        stack: '2018',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'水',
                        type:'bar',
                        stack: '2017',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'气',
                        type:'bar',
                        stack: '2017',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'电',
                        type:'bar',
                        stack: '2017',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    }
                ]
            };
            this.myChart.setOption(option,true);
        }
    }
}