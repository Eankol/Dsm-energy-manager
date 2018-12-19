import dsmEnergyUseServ from "@/components/js/EnergyManager/dsmEnergyUse.Service"
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');//曲线
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');

export default{
    data(){
        return {
            devs:[],
            selectDate:'',
            selectType:'',
            resdata:[],
            selectLdId:'',
            isRelative:false //是否为相对坐标，只有line需要引用
        }    
    },
    mounted () {
        dsmEnergyUseServ.getDevs().then(res=>{
            this.devs=res.data;
        }).catch(err=>{}).finally(()=>{});
    },
    methods: {
        echartIn(x,y){
            var myChart = echarts.init(document.getElementById('main'));
            var option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: { //工具箱
                    show: true,
                    feature: {
                        myRelative:{
                            show:true,
                            title:this.isRelative?'绝对坐标':'相对坐标',
                           icon:'path:M0.000 214.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 354.000 L 400.000 308.000 386.480 308.000 C 376.498 308.000,372.834 308.126,372.480 308.480 C 372.129 308.831,372.000 312.053,372.000 320.480 L 372.000 332.000 320.000 332.000 L 268.000 332.000 268.000 320.480 C 268.000 312.053,267.871 308.831,267.520 308.480 C 266.831 307.791,237.169 307.791,236.480 308.480 C 236.129 308.831,236.000 312.053,236.000 320.480 L 236.000 332.000 152.000 332.000 L 68.000 332.000 68.000 308.000 L 68.000 284.000 99.520 284.000 C 123.502 284.000,131.155 283.885,131.520 283.520 C 132.211 282.829,132.211 245.171,131.520 244.480 C 131.155 244.115,123.502 244.000,99.520 244.000 L 68.000 244.000 68.000 220.000 L 68.000 196.000 107.520 196.000 C 137.724 196.000,147.153 195.887,147.520 195.520 C 148.213 194.827,148.213 149.173,147.520 148.480 C 147.153 148.113,137.724 148.000,107.520 148.000 L 68.000 148.000 68.000 116.000 L 68.000 84.000 111.520 84.000 C 144.836 84.000,155.153 83.887,155.520 83.520 C 156.214 82.826,156.214 29.174,155.520 28.480 C 155.150 28.110,137.280 28.000,77.520 28.000 L 0.000 28.000 0.000 214.000',
                           onclick:()=> {//事件触发，记得用箭头函数，不要function，因为function中不能回调，vue需要this指向method的方法
                              this.isRelative=!this.isRelative;
                              this.echartIn(x,y);
                                }  
                        },
                        dataZoom: { //框选区域缩放
                            yAxisIndex: 'none'
                        },
                        magicType: {
                            type: ['line', 'bar']
                        }, //动态类型切换
                        restore: {}, //复位原始图表
                        saveAsImage: {} //保存图片
                    }
                },
                xAxis: [{
                    axisLabel: {
                        rotate: 30,
                        interval: 11
                    },
        
                    type: 'category',
                    boundaryGap: false,
                    data: x
                }],
                yAxis: [{
                    type: 'value',
                    scale:this.isRelative
                }],
        
                series:{
                    name : "电压",
                    type : 'line',
                    symbol : 'none',
                    smooth : 0.2,
                    data : y             
                }
                
            };
            myChart.setOption(option);
        },
        selectDev(data){
            this.selectLdId=data[0].dsmLdId;
        },
        toQuery(){
            if(this.selectDate==''){
                swal("请选择日期");
                return false;
            }
            if(this.selectType==''){
                swal("请选择查询类型");
                return false;
            }
            if(this.selectLdId==''){
                swal("请选择设备");
                return false;
            }
            dsmEnergyUseServ.getVol(this.selectDate,this.selectLdId).then(res=>{
                console.log(res.data)
                this.resdata=[];
                for(let i in res.data.value){
                    this.resdata.push(res.data.value[i])
                }
                if(this.resdata.length==0){
                    document.getElementById("main").classList.remove("ebox");
                    this.echartIn(this.getIndexX(),this.resdata)  
                    swal("没有数据")
                }else{
                    document.getElementById("main").classList.remove("ebox");
                    document.getElementById("main").classList.add("ebox");
                    this.resdata.splice(0,6)
                    this.echartIn(this.getIndexX(),this.resdata)  
                }
                
            }).catch(err=>{}).finally(()=>{});
        },
        getDate(a){
            this.selectDate=a;//获取日期
        },
        getIndexX(){ // X轴坐标时间
            let x=[]
            for(let i=0;i<289;i++){
               let h = parseInt(i*5/60)
               let m = parseInt(i*5%60)
               x.push((h<10?('0'+h):h)+':'+(m<10?('0'+m):m))
            }
            return x;
        }
    }
}