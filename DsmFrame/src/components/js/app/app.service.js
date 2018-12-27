import api from 'axios';
import g from './../../global';

class appService{
    getMenus(){
        return api.get(g.info.baseURL+'/getMenus?parentId=0');
    }
}

export default new appService();