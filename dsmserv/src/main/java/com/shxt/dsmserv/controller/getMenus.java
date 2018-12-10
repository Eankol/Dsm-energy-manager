package com.shxt.dsmserv.controller;
/*
* Create by Ean on 2018-12-06;
* get menu information :
*       get all menu information,
*       get by user.
* */

import com.shxt.dsmserv.entity.MenuInfo;
import com.shxt.dsmserv.service.MenuService;
import org.apache.ibatis.javassist.expr.NewArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class getMenus {
    @Autowired
    MenuService menuService;

    @GetMapping("/getMenus")
    public Map<String,ArrayList> getMenus(String parentId){
        System.out.println(parentId);
        Map<String,ArrayList> map=new HashMap<String, ArrayList>();
        map.put("menus",menuService.getMenuInfos(parentId));
        return map;
    }

}
