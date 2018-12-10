import api from 'axios';
import constant from '@/config/urlConfig';
const { baseURL } = constant;

class appService{

    getMenus(){

        return api.get(baseURL+'/getMenus?parentId=0');
    }
}

export default new appService();