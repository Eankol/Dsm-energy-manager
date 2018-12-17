package com.shxt.dsmserv.controller.devController;

import com.shxt.dsmserv.entity.devInfo.DevInfo;
import com.shxt.dsmserv.service.MenuService;
import com.shxt.dsmserv.service.devService.DevService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class DevController {
    @Autowired
    DevService devService;

    @GetMapping("/getDev")
    public ArrayList<DevInfo> getDev(String parentId){
        // System.out.println(parentId);
        return devService.getDevInfos(parentId);
    }
}
