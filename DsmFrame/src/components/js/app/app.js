import appService from "@/components/js/app/app.service"
export default {
    data () {
        return {
            isCollapsed: false,
            viewHeight:(window.innerHeight-150)+"px",
            menusData:{},
            activeMenu:[{
                menuId:"11",
                parentMenuId:"1",
                menuLevel:"1",
                menuName:"用电概况",
                orderNo:"1",
                menuState:"1",
                style:'btf',
                menuAliasName:"用电概况",
                reference:"/kode/basic/basic.html",
                nodes:[]}
            ],
            activeBtn:'',
            lastActive:''
        }
    },
    mounted(){
     appService.getMenus().then(res=>{
         console.log(res);
         this.menusData=res.data;
     }).catch(error=>{
         console.log(error)
     }).finally(()=>{});
    },
    computed: {
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    methods: {
        collapsedSider () {
            this.$refs.side1.toggleCollapse();
        },
        rGo(turl){
            $this.$router.go({path:turl})
        },
        onSelect(data){
            //alert(data)
            
            for (var i=0;i<this.menusData.menus.length;i++){
                var t=this.menusData.menus[i].nodes
                for (var j=0;j<t.length;j++){
                    if(t[j].reference==data){
                        let ispush=true;
                        for(let n=0;n<this.activeMenu.length;n++){
                            this.activeMenu[n].style="";
                            if(this.activeMenu[n].reference==data){
                                ispush=false;
                                this.activeMenu[n].style="btf";
                            }
                        }
                        if(ispush){
                            t[j].style="btf";
                            this.activeMenu.push(t[j])
                        }                     
                    }
                }
            }
            this.activeBtn=data;
            this.$router.push({path:data})
        },
        delActive(data){
            for(var i=0;i<this.activeMenu.length;i++){
                if (this.activeMenu[i].reference==data) {
                    this.activeMenu.splice(i,1); 
                }
            }
            this.onSelect(this.activeMenu[this.activeMenu.length-1].reference)
        },
        sptActive(){
            let i=this.activeMenu.length
            if(i<6){
                return this.activeMenu
            }
            
            return [this.activeMenu[i-5],this.activeMenu[i-4],
            this.activeMenu[i-3],this.activeMenu[i-2],this.activeMenu[i-1]];
        },
        toLeft(){
            let a=this.activeMenu[0];
            for(let i=0;i<(this.activeMenu.length-1);i++){
                this.activeMenu[i]=this.activeMenu[i+1];
            }
            this.activeMenu.splice(this.activeMenu.length-1,1);
            this.activeMenu.push(a);
        },
        toRight(){
            let a=this.activeMenu[this.activeMenu.length-1];
            for(let i=this.activeMenu.length-1;i>0;i--){
                this.activeMenu[i]=this.activeMenu[i-1];
            }
            this.activeMenu.splice(0,1);
            this.activeMenu.splice(0,0,a);
        }
    }
}