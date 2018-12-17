import dsmEnergyUseServ from "@/components/js/EnergyManager/dsmEnergyUse.Service"

export default{
    data(){
        return {
            devs:[]
        }    
    },
    mounted () {
        dsmEnergyUseServ.getDevs().then(res=>{
            console.log(res)
            this.devs=res.data;
        }).catch(err=>{}).finally(()=>{});
    },
    methods: {
        
    }
}