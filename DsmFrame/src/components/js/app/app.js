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
        onSelect(data){
            //alert(data)
            
            for (var i=0;i<this.menusData.menus.length;i++){
                var t=this.menusData.menus[i].nodes
                for (var j=0;j<t.length;j++){
                    if(t[j].menuId==data){
                        let ispush=true;
                        for(let n=0;n<this.activeMenu.length;n++){
                            if(this.activeMenu[n].menuId==data){
                                ispush=false;
                            }
                        }
                        if(ispush){
                            this.activeMenu.push(t[j])
                        }                     
                    }
                }
            }
            this.lastActive=this.activeBtn;
            this.activeBtn=data;
        },
        delActive(data){
            for(var i=0;i<this.activeMenu.length;i++){
                if (this.activeMenu[i].menuId==data) {
                    this.activeMenu.splice(i,1);
                    window.history.go(-1);                 
                }
            }
        }
    }
}