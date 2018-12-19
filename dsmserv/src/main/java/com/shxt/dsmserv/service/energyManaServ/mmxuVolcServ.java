package com.shxt.dsmserv.service.energyManaServ;

import com.shxt.dsmserv.dao.energyMana.MmxuVolcDao;
import com.shxt.dsmserv.dao.energyMana.MstaVoldDao;
import com.shxt.dsmserv.entity.energyMana.mmxuVolInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class mmxuVolcServ {
    @Autowired
    MmxuVolcDao mmxuVolcDao;

    @Autowired
    MstaVoldDao mstaVoldDao;

    public Map getVol(String ldId,String queryDate){
        HashMap<String,ArrayList> map=new HashMap<>();
        map.put("value",mmxuVolcDao.getMmxuVol(ldId, queryDate));
        return map;
    }

    public Map getMstaVol(String startDate,String endDate,String ldId){
        HashMap<String,ArrayList> map =new HashMap<>();
        map.put("value",mstaVoldDao.getMstaVol(startDate, endDate, ldId));
        return map;
    }
}
