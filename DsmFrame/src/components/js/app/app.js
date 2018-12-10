import appService from "@/components/js/app/app.service"
export default {
    data () {
        return {
            isCollapsed: false,
            viewHeight:(window.innerHeight-150)+"px",
            menusData:{},
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
        }
    }
}