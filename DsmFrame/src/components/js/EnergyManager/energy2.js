// 写在前面：原始数据不要包含数组，否则你还需要重写比较json的方法，
// 你也可以尝试，使用ES6的findIndex来重写整个方法，这取决于你的数据，
// 如果数据量过多，可以试着去重新格式化数据内容，否则图可能不会正确显示，
// 在option中去配置tooltip鼠标悬停提示信息，合理使用formatter，
// 尽量在函数中使用箭头函数，这样你才可以合理的使用vue的this关键字，因为vue在滥用this；
export default{
    data(){
        return {
            myChart:null,
            isR:{source:null,
            target:null},//标记链接对
            data1:[//原始数据1
                {
                    name:'采集点1',
                    id:'12',
                    itemStyle:{
                        color:'#dd9900'
                    }
                },{
                    name:'采集点2',
                    id:'21'
                },{
                    name:'采集点3',
                    id:'32'
                },{
                    name:'采集点4',
                    id:'9'
                },{
                    name:'采集点5',
                    id:'0'
                }
            ],
            data2:[
                {
                    name:'采集点1-1',
                    id:'1'
                },{
                    name:'采集点2-1',
                    id:'2'
                },{
                    name:'采集点3-1',
                    id:'3'
                },{
                    name:'采集点4-1',
                    id:'4'
                },{
                    name:'采集点5-1',
                    id:'5'
                }
            ],
            thisData:[],//整理后数据
            relation:[]//关系
        }    
    },
    mounted () {
        this.thisData=this.reData(this.data1,this.data2)//梳理数据，添加初始化坐标
        this.echartIn(this.relation,this.thisData)
        this.myChart.on('click',(value)=>{
            if(value.dataType=='node'){
                if(value.data.p==1){
                     this.isR.source=this.fdex(value.data,this.thisData);
                 }
                 if(value.data.p==2){
                     if(this.isR.source==null){
                     }else{
                         this.isR.target=this.fdex(value.data,this.thisData);
                         if(this.fdex(this.isR,this.relation)==-1){
                             this.relation.push(this.isR)
                             this.isR={source:null,
                             target:null};
                             this.echartIn(this.relation,this.thisData)
                         } 
                     }
                 }
            }
            if(value.dataType=='edge'){
                let tmp=[];
                for(let i=0;i<this.relation.length;i++){
                    if(!this.compareJson(value.data,this.relation[i])){
                        tmp.push(this.relation[i])
                    }
                }
                this.relation=tmp
                this.echartIn(this.relation,this.thisData)
            }
         });
    },

    methods: {
        reData(data1,data2){//格式化代数据，以便echarts使用
            let datas=[];
            for(let i=0;i<data1.length;i++){
                let tmp=data1[i];
                tmp.p=1;//标记是设备还是映射设备，响应点击事件需要以此来判断响应
                tmp.x=10; //x坐标
                tmp.y=(i*10); //y坐标
                datas.push(tmp)
            }
            for(let i=0;i<data2.length;i++){
                let tmp=data2[i];
                tmp.p=2;
                tmp.x=30;
                tmp.y=(i*10);
                datas.push(tmp)
            }
            return datas;
        },
        echartIn(relations,thisData){
            this.myChart=this.$echarts.init(document.getElementById('main'));
            var option = { 
                title: {
                    text: '映射关系图'
                },
                tooltip: {
                   formatter:(parmas)=>{ //格式化鼠标提示信息
                    let res='';
                    if(parmas.dataType=='node'){
                        res=parmas.data.name+":<br/>已匹配设备:"+parmas.data.id;
                    }
                    if(parmas.dataType=='edge'){
                        let t = parmas.name.split('>');
                        res=this.thisData[parseInt(t[0])].name+">"+this.thisData[parseInt(t[1])].name;
                    }
                    return res;
                   }
                   
                },
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series :[
                    {
                        type: 'graph',
                        layout: 'none',
                        symbol:'rect',
                        symbolSize: [60,30],
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        data:thisData,
                        links: relations,
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 2,
                                curveness: 0
                            }
                        }
                    }
                ]
            };
            this.myChart.setOption(option,true);
        },
        fdex(a,arr){//查找json在json数组的下标，不在该数组则返回-1
            let i = -1;
            for(let j=0;j<arr.length;j++){
                i+=1;
                if(this.compareJson(arr[j],a)){
                    return i;
                }  
            }
            i = -1;
            return i;
        },
        compareJson(j1,j2){//比较两个json
            for(let key in j1){
                if(typeof(j1[key])=='object'){
                    this.compareJson(j1[key],j2[key])
                }else{
                    if(j1[key]!=j2[key]){
                        return false
                    }
                }
                
            }
            for(let key in j2){
                if(typeof(j2[key])=='object'){
                    this.compareJson(j1[key],j2[key])
                }else{
                    if(j2[key]!=j1[key]){
                        return false
                    }
                }
            }
            return true;
        }
    }
}