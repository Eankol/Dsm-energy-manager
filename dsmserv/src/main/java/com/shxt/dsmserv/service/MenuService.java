package com.shxt.dsmserv.service;

import com.shxt.dsmserv.dao.MenuDao;
import com.shxt.dsmserv.entity.MenuInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MenuService {
    @Autowired
    MenuDao menuDao;



    public ArrayList<MenuInfo> getMenus(ArrayList arrayList){
        if (arrayList.size()!=0){
            for (int i=0;i<arrayList.size();i++){
                MenuInfo tmp= (MenuInfo) arrayList.get(i);
                tmp.setNodes(menuDao.getMenus(tmp.getMenuId()));
                getMenus(tmp.getNodes());
            }
        }
        return arrayList;
    }

    public ArrayList<MenuInfo> getMenuInfos(String parentId){
        ArrayList<MenuInfo> menuInfos=menuDao.getMenus(parentId);
        return getMenus(menuInfos);
        //return menuDao.getMenus(parentId);
    }
}
