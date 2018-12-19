package com.shxt.dsmserv.dao.energyMana;

import com.shxt.dsmserv.entity.energyMana.mstaVoldInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

import java.util.ArrayList;

@Mapper
public interface MstaVoldDao {
    @SelectProvider(type = MstaVoldProvider.class,method = "sql")
    public ArrayList<mstaVoldInfo> getMstaVol(String startDate,String endDate,String ldId);
}
