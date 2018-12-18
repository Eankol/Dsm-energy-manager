import api from 'axios';
import constant from '@/config/urlConfig';
const { baseURL } = constant;

class dsmEnergyUseService{

    getDevs(){
        return api.get(baseURL+'/getDev?parentId=990006');
    }

    getVol(queryDate,ldId){
        return api.get(baseURL+'/getVol?ldId='+ldId+'&queryDate='+queryDate);
    }
}

export default new dsmEnergyUseService();