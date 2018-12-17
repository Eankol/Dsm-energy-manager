import api from 'axios';
import constant from '@/config/urlConfig';
const { baseURL } = constant;

class dsmEnergyUseService{

    getDevs(){
        return api.get(baseURL+'/getDev?parentId=990006');
    }
}

export default new dsmEnergyUseService();