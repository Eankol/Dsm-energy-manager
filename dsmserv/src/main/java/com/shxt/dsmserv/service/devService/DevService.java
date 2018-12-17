package com.shxt.dsmserv.service.devService;

import com.shxt.dsmserv.dao.devDao.DevDao;
import com.shxt.dsmserv.entity.devInfo.DevInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DevService {
    @Autowired
    DevDao devDao;

    public ArrayList<DevInfo> getDevs(ArrayList<DevInfo> arrayList){
        if(arrayList!=null&&arrayList.size()>0){
            for (int i=0;i<arrayList.size();i++){
                DevInfo d = arrayList.get(i);
                d.setChildren(devDao.getDevInfo(d.getDsmLdId()));
                getDevs(d.getChildren());
            }
        }
        return arrayList;
    }

    public ArrayList<DevInfo> getDevInfos(String parentId){
        ArrayList<DevInfo> devInfos=devDao.getDevInfo(parentId);
        return getDevs(devInfos);
        //return menuDao.getMenus(parentId);
    }
}
