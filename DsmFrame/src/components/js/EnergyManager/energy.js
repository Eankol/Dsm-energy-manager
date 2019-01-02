import dsmEnergyUseServ from "@/components/js/EnergyManager/dsmEnergyUse.Service"

export default{
    data(){
        return {
            devs:[],
            filterText: ''
        }
    },
    watch: {
        filterText(val) {
          this.$refs.tree2.filter(val);
        }
      },
    mounted () {
        dsmEnergyUseServ.getDevs().then(res=>{
            this.devs=res.data;
        }).catch(err=>{}).finally(()=>{});
    },
    methods: {
        selectDev(data){
            swal(JSON.stringify(data))
        },
        filterNode(value, data) {
            console.log(data)
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          },
        renderContent (h, { node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '40%'
                }
            }, [
                h('span', [
                    h('Icon', {
                        props: {
                            type: data.dsmObjtypeCode=='350'?"ios-home":(data.dsmObjtypeCode=='352'?"md-git-merge":'ios-document')
                        },
                        style: {
                            marginRight: '8px',
                            color:'#096792',
                            margin:0,
                            'font-size':'14px'
                        }
                    }),
                    h('span', data.title)
                ]),
                h('span', {
                    style: {
                        display: 'inline-block',
                        float: 'right',
                        marginRight: '32px'
                    }
                }, [
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'ios-add',
                            type: 'primary',
                            size: 'small'
                        }),
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            click: () => { this.append(data) }
                        }
                    }),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'ios-remove',
                            type: 'primary',
                            size: 'small'
                        }),
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            click: () => { this.remove(data) }
                        }
                    }),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: "ios-arrow-round-up",
                            type: 'primary',
                            size: 'small'
                        }),
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            click: () => { this.moveUp(data, node) }
                        }
                    }),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'ios-arrow-round-down',
                            type: 'primary',
                            size: 'small'
                        }),
                        on: {
                            click: () => { this.remove(data, node) }
                        }
                    })
                ])
            ]);
        },
        append (data) {
            const children = data.children || [];
            children.push({
                title: 'appended node',
                expand: true
            });
            this.$set(data, 'children', children);
        },
        moveUp(data){
            console.log(node)
            console.log(data)
        },
            remove(data) {
                const parent = node;
                const children = parent.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
              },
        
        changeData(a){
            switch (a) {
                case '1':
                dsmEnergyUseServ.getDevs().then(res=>{
                    this.devs=res.data;
                }).catch(err=>{}).finally(()=>{});
                    break;
                case '2':
                let tmp= [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
                this.devs=tmp;
                    break;
            
                default:
                    break;
            }
        }
    }
}