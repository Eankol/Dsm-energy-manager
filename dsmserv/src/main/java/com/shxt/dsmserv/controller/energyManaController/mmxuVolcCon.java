package com.shxt.dsmserv.controller.energyManaController;

import com.shxt.dsmserv.service.energyManaServ.mmxuVolcServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class mmxuVolcCon {
    @Autowired
    mmxuVolcServ msv;

    @GetMapping("/getVol")
    public Map getVol(String ldId,String queryDate){
        return msv.getVol(ldId, queryDate);
    }
}
