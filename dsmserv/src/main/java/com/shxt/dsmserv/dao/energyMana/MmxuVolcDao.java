package com.shxt.dsmserv.dao.energyMana;

import com.shxt.dsmserv.entity.energyMana.mmxuVolInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

import java.util.ArrayList;

@Mapper
public interface MmxuVolcDao {
    @SelectProvider(type = MmxuVolcDaoProvider.class,method = "sql")
    public ArrayList<mmxuVolInfo> getMmxuVol(String ldId, String queryDate);
}
