import dsmEnergyUseServ from "@/components/js/EnergyManager/dsmEnergyUse.Service"
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
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
            selectLdId:''
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
            myChart.setOption({
                title: {
                    text: '电压曲线',
                    show:true
                },
                legend:{},
                tooltip: {},
                xAxis: {
                    data: x
                },
                yAxis: {},
                series: [{
                    name: '电压',
                    type: 'bar',
                    data: y,
                }]
            });
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
                for(var i in res.data.value){
                    this.resdata.push(res.data.value[i])
                }
                if(this.resdata.length==0){
                    swal("没有数据")
                }
                this.resdata.splice(0,6)
                this.echartIn(this.getIndexX(),this.resdata)
            }).catch(err=>{}).finally(()=>{});
        },
        getDate(a){
            this.selectDate=a;
        },
        getIndexX(){
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