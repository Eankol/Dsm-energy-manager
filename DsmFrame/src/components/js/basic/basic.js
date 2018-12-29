let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');//条形统计图
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');

export default {
    data () {
      return {
        edatas:[],
        btn:'',
        model10:[],
        modal1:false,
        value:'',
        spinShow: true,
        isshow:false,
        columns1:[
            {
                title: '设备',
                key: 'name'
            },
            {
                title: '数据',
                align:'center',
                children:[
                   
                ]
            },
            {
                title: '日期',
                key: 'date'
            },
            {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                  swal(JSON.stringify(params))
                                }
                            }
                        }, '查看'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            on: {
                                click: () => {
                                   swal("假装已删除")
                                }
                            }
                        }, '删除')
                    ]);
                }
            }
        ],
        data1:[
            {
                name:'采集点1',
                p:'10',
                v:'15',
                a:'9',
                date:'2018-11-02'
            },{
                name:'采集点2',
                p:'12',
                v:'15',
                a:'2',
                date:'2018-11-04'
            },{
                name:'采集点3',
                p:'10',
                v:'15',
                a:'9',
                date:'2018-11-02'
            },{
                name:'采集点4',
                p:'10',
                v:'16',
                a:'9',
                date:'2018-12-02'
            },{
                name:'采集点5',
                p:'7',
                v:'15',
                a:'7',
                date:'2018-10-02'
            }
        ]
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
                    text: 'ECharts基本示例'
                },
                tooltip: {},
                toolbox:{
                    show:true
                },
                xAxis: {
                    data: ['电量', '电压', '电流', '有功', '无功']
                },
                yAxis: {},
                series: [{
                    name: '值',
                    type: 'bar',
                    data: edata,
                }]
            });
        },
        slcData(){
            this.isshow=!this.isshow;
            let a = Math.random()*100;
            this.edatas=[5, 20, 36, a, 10]
            setTimeout(()=>{
                this.echartIn(this.edatas)
                swal("查询成功！");
                this.isshow=!this.isshow;
            },3000)
            
        },
        teseAlert(){
            swal("test");
        },
        changeTitle(){
            this.columns1[1].children=[];
            for(let i=0;i<this.model10.length;i++){
                let t=this.model10[i].split(',')
                let c={
                    title:t[0],
                    key:t[1]
                }
                this.columns1[1].children.push(c)
            }
        },
        success () {
            this.$Message.success('消息提示');
        },
        warning () {
            this.$Message.warning('警告提示');
        },
        error () {
            this.$Message.error('错误提示');
        },
        loading () {
            const msg = this.$Message.loading({
                content: 'Loading...',
                duration: 0
            });
            setTimeout(msg, 3000);
        },
        info (nodesc) {
            this.$Notice.info({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        success (nodesc) {
            this.$Notice.success({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        warning (nodesc) {
            this.$Notice.warning({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        error (nodesc) {
            this.$Notice.error({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        rollTo(a){
            //swal(document.getElementsByName(a)[0].offsetTop+"")
            //swal(document.getElementsByClassName('menu')[0].height()+'')
           document.getElementsByClassName('hello')[0].scrollTop=document.getElementsByName(a)[0].offsetTop-140
        }
    }
  }