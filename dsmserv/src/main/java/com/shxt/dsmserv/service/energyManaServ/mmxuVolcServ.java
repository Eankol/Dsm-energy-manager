package com.shxt.dsmserv.service.energyManaServ;

import com.shxt.dsmserv.dao.energyMana.MmxuVolcDao;
import com.shxt.dsmserv.dao.energyMana.MstaVoldDao;
import com.shxt.dsmserv.entity.devInfo.DevInfo;
import com.shxt.dsmserv.entity.energyMana.mmxuVolInfo;
import com.shxt.dsmserv.service.devService.DevService;
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

    @Autowired
    DevService devService;

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

    public Map getMstaVols(String startDate,String endDate,String ldId){
        HashMap<String,ArrayList> map = new HashMap<>();
        ArrayList<DevInfo> devInfos=new ArrayList<>();
        devInfos=devService.getDevInfos(ldId);
        ArrayList<String> devs=new ArrayList<>();
        devs=readDevs(devInfos,devs);
        devs.add(ldId);
        ArrayList<ArrayList> res=new ArrayList<>();
        for (int i=0;i<devs.size();i++){
            res.add(mstaVoldDao.getMstaVol(startDate, endDate,devs.get(i)));
        }
        map.put("value",res);
        return map;
    }
    public ArrayList<String> readDevs(ArrayList<DevInfo> devs,ArrayList<String> res){
        for(int i=0;i<devs.size();i++){
            res.add(devs.get(i).getDsmLdId());
            if (devs.get(i).getChildren().size()>0){
                readDevs(devs.get(i).getChildren(),res);
            }
        }
        return res;
    }
}
