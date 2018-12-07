package com.shxt.dsmserv.controller;
/*
* Create by Ean on 2018-12-06;
* get menu information :
*       get all menu information,
*       get by user.
* */

import com.shxt.dsmserv.entity.MenuInfo;
import com.shxt.dsmserv.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class getMenus {
    @Autowired
    MenuService menuService;

    @GetMapping("/getMenus")
    public ArrayList<MenuInfo> getMenus(String parentId){
        System.out.println(parentId);
        return menuService.getMenuInfos(parentId);
    }

}
