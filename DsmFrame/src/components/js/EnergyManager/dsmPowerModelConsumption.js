import dsmEnergyUseServ from "@/components/js/EnergyManager/dsmEnergyUse.Service"

export default{
    data(){
        return {
        	a:1,
        	b:10,
        	c:[10,20,50,100],
        	d:'bottom',
        	e:[],
        	pageTotal:0,
        	loading:false,
        	selData:'',
            devs:[],
            selectDate:'',
            selectType:'',
            resdata:[],
            value2:['yyyy-MM-dd', 'yyyy-MM-dd'],
            selectLdId:'',
            startDate:'',
            endDate:'',
            e2Data:[],
            tableData:[],
            isRelative:false, //是否为相对坐标，只有line需要引用
            columns1: [{
                        type: 'selection',
                        width: 60,
                        align: 'center'
            },
            	{
                    title: '设备名称',
                    key: 'dsmLdName',
                    render: (h, params) => {
                        return h('span', {
                            on: {
                                click: () => {
                                    this.alertTest(params.row.dsmLdName)
                                }
                            }
            
                        },params.row.dsmLdName);
                    }
                },{
                    title: '设备编号',
                    key: 'dsmLdId',
                    render: (h, params) => {
                        return h('span', {
                            on: {
                                click: () => {
                                    this.alertTest(params.row.dsmLdId)
                                }
                            }
            
                        },params.row.dsmLdId);
                    }
                },{
                    title: '日期',
                    key: 'date',
                    render: (h, params) => {
                        return h('span', {
                            on: {
                                click: () => {
                                    this.alertTest(params.row.date)
                                }
                            }
            
                        },params.row.date);
                    }
                },{
                    title:'电压',
                    key:'maxVol',
                    render: (h, params) => {
                        return h('span', {
                            on: {
                                click: () => {
                                    this.alertTest(params.row.maxVol)
                                }
                            }
            
                        },params.row.maxVol);
                    }
                }]
        }    
    },
    mounted () {
        dsmEnergyUseServ.getDevs().then(res=>{
            this.devs=res.data;
        }).catch(err=>{}).finally(()=>{});
    },
    methods: {
        echartIn(data){
            var myChart = this.$echarts.init(document.getElementById('main'));
            var option = {
                title: {
                    text: '统计',
                    x:'center'
                },
                tooltip: {
                    show:true
                },
                legend:function(){
                        let t=[]
                        for(let i = 0;i<data.length;i++){
                            t.push(data[i].date)
                        }
                        return {orient: 'vertical',x: 'left',type: 'scroll',data:t};
                    }(),
                toolbox: { //工具箱
                    show: true,
                    feature: {
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
                series:function(){
                    let t=[]
                    let a={};
                    a.name="电压";
                    a.type= 'pie';
                    a.center= ['40%', '50%'];
            
                    a.data=[];
                        for(let i = 0;i<data.length;i++){
                            let ts={};
                            ts.value= data[i].maxVol;
                            ts.name= data[i].date;
                            
                            
                            a.data.push(ts)
                        }
                        t.push(a)
                    return t;
                }()
                
            };
            myChart.setOption(option,true);
        },
        echartIn2(data){
            var myChart = this.$echarts.init(document.getElementById('main2'));
            var option = {
                title: {
                    text: ''
                },
                tooltip: {
                    show:true
                },
                legend:function(){
                        let t=[]
                        for(let i = 0;i<data.length;i++){
                            if(data[i].length>0){
                                t.push(data[i][0].dsmLdName)
                            }
                        }
                        return {data:t};
                    }(),
                toolbox: { //工具箱
                    show: true,
                    feature: {
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
                yAxis:  {
                    type: 'value'
                },
                xAxis: {
                    type: 'category',
                    data: function(){
                        let t=[]
                        for(let i = 0;i<data.length;i++){
                            if(data[i].length>0){
                                for(let j=0;j<data[i].length;j++){
                                    if(t.indexOf(data[i][j].date)==-1){
                                        t.push(data[i][j].date)
                                    }
                                }
                            }
                        }
                        return t;
                    }()
                },
                series:function(){
                    let res=[];
                    let t=[]
                    for(let i = 0;i<data.length;i++){
                        if(data[i].length>0){
                            for(let j=0;j<data[i].length;j++){
                                if(t.indexOf(data[i][j].date)==-1){
                                    t.push(data[i][j].date)
                                }
                            }
                        }
                    }
                        for(let j=0;j<data.length;j++){
                            if(data[j].length>0){
                                let ts={};
                                ts.name=data[j][0].dsmLdName;
                                ts.type='bar';
                                ts.stack= '总电压';
                                ts.label= {
                                    normal: {
                                        show: true
                                    }
                                };
                                ts.data=t;
                                for(let p=0;p<data[j].length;p++){
                                    let c=data[j][p];
                                    ts.data[t.indexOf(c.date)]=c.maxVol;
                                }

                                
                                res.push(ts)
                            }
                        
                    }
                    return res;
                }()
            };
            myChart.setOption(option,true);
        },
        selectDev(data){
            this.selectLdId=data[0].dsmLdId;
        },
        toQuery(){
            if(this.startDate==''){
                swal("请选择日期");
                return false;
            }
            if(this.endDate==''){
                swal("请选择日期");
                return false;
            }
            if(this.selectLdId==''){
                swal("请选择设备");
                return false;
            }
            dsmEnergyUseServ.getMstaVol(this.startDate,this.endDate,this.selectLdId).then(res=>{
                this.resdata=[];
                this.resdata=res.data.value;
                this.echartIn(this.resdata)
                //alert(JSON.stringify(this.resdata));
            }).catch(err=>{}).finally(()=>{});
            dsmEnergyUseServ.getAllVol(this.startDate,this.endDate,this.selectLdId).then(res=>{
                this.e2Data=[];
                this.e2Data=res.data.value;
                this.echartIn2(this.e2Data);
                //alert(JSON.stringify(this.e2Data));
            }).catch(err=>{}).finally(()=>{});
            dsmEnergyUseServ.getAllVolTwo(this.startDate,this.endDate,this.selectLdId,this.a,this.b).then(res=>{
                this.loading = true;
                this.tableData=[];
                let c=res.data.value;
                let d=res.data.str;
                for(let i=0;i<c.length;i++){

                	this.tableData.push(c[i])

                }
                this.pageTotal = d[0];
                this.loading = false;
               //alert(JSON.stringify(this.tableData));
            }).catch(err=>{}).finally(()=>{});
            
        },
        getDate(a){
            this.startDate=a[0];
            this.endDate=a[1];//获取日期
        },
        getIndexX(){ // X轴坐标时间
            let x=[]
            for(let i=0;i<289;i++){
               let h = parseInt(i*5/60)
               let m = parseInt(i*5%60)
               x.push((h<10?('0'+h):h)+':'+(m<10?('0'+m):m))
            }
            return x;
        },
        exportData () {
            this.$refs.table.exportCsv({
                filename: '耗电类比分析'
            });
        },
        handlePage(value) {
          this.loading = true;
	      this.a = value;
	      console.log(this.a);
	      dsmEnergyUseServ.getAllVolTwo(this.startDate,this.endDate,this.selectLdId,this.a,this.b).then(res=>{
                this.tableData=[];
                let c=res.data.value;
                for(let i=0;i<c.length;i++){
                	this.tableData.push(c[i])
                }
                this.loading = false;
               //alert(JSON.stringify(this.tableData));
            }).catch(err=>{}).finally(()=>{});
	    },
	    handlePageSize(value) {
	    	this.loading = true;
	      this.b = value;
	      dsmEnergyUseServ.getAllVolTwo(this.startDate,this.endDate,this.selectLdId,this.a,this.b).then(res=>{
                this.tableData=[];
                let c=res.data.value;
                for(let i=0;i<c.length;i++){
                	this.tableData.push(c[i])
                }
                this.loading = false;
               //alert(JSON.stringify(this.tableData));
            }).catch(err=>{}).finally(()=>{});
	    },
	    formatJson(filterVal, jsonData) {
    　　　　return jsonData.map(v => filterVal.map(j => v[j]))
	    　},
	    export2Excel() {
	    	 dsmEnergyUseServ.getAllVolTT(this.startDate,this.endDate,this.selectLdId).then(res=>{
                this.e=[];
                let c=res.data.value;
                for(let i=0;i<c.length;i++){
                	this.e.push(c[i])
                }
                
                require.ensure([], () => {
	    　　　　　　const { export_json_to_excel } = require('../../../vendor/Export2Excel');
	    　　　　　　const tHeader = ['设备名称','设备编号','日期','电压',];
	    　　　　　　const filterVal = ['dsmLdName', 'dsmLdId', 'date', 'maxVol',];
	    　　　　　　const list = this.e;
	    　　　　　　const data = this.formatJson(filterVal, list);
	    　　　　　　export_json_to_excel(tHeader, data, '耗电类比分析');
	    　　　　})
               //alert(JSON.stringify(this.tableData));
            }).catch(err=>{}).finally(()=>{});
	    　 },
	    selectMenu(){
            swal(JSON.stringify(this.devs))
       },
       alertTest(value) {
         alert(value);
       },
       onselect(selection,row) {
       		alert(JSON.stringify(selection));
       },
       onselectall(selection) {
       		alert(JSON.stringify(selection));
       }
    }
}