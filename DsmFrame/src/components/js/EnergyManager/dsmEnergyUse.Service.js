import api from 'axios';
import g from './../../global';

class dsmEnergyUseService{

    getDevs(){
        return api.get(g.info.baseURL+'/getDev?parentId=990006');
    }

    getVol(queryDate,ldId){
        return api.get(g.info.baseURL+'/getVol?ldId='+ldId+'&queryDate='+queryDate);
    }

    getMstaVol(startDate,endDate,ldId){
        return api.get(g.info.baseURL+'/getMstaVol?startDate='+startDate+'&endDate='+endDate+'&ldId='+ldId);
    }

    getAllVol(startDate,endDate,ldId){
        return api.get(g.info.baseURL+'/getAllVol?startDate='+startDate+'&endDate='+endDate+'&ldId='+ldId);
    }
    
    getAllVolTwo(startDate,endDate,ldId,a,b){
        return api.get(g.info.baseURL+'/getAllVolTwo?startDate='+startDate+'&endDate='+endDate+'&ldId='+ldId+'&a='+a+'&b='+b);
    }
    
    getAllVolTT(startDate,endDate,ldId){
        return api.get(g.info.baseURL+'/getAllVolTT?startDate='+startDate+'&endDate='+endDate+'&ldId='+ldId);
    }
}

export default new dsmEnergyUseService();