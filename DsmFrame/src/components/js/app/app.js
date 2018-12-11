import appService from "@/components/js/app/app.service"
export default {
    data () {
        return {
            isCollapsed: false,
            viewHeight:(window.innerHeight-150)+"px",
            menusData:{},
            activeMenu:[],
            activeBtn:''
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
                        if(this.activeMenu.indexOf(t[j])==-1){
                           this.activeMenu.push(t[j]) 
                        }                       
                    }
                }
            }
            this.activeBtn=data;
        },
        delActive(data){
            console.log(data)
            //TODO
            for(var i=0;i<this.activeMenu.length;i++){
                if (this.activeMenu[i].menuId==data) {
                    this.activeMenu.splice(this.activeMenu.indexOf(this.activeMenu[i]),1)
                }
            }
        }
    }
}