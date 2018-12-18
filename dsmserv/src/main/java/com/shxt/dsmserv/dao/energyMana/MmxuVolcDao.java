package com.shxt.dsmserv.dao.energyMana;

import com.shxt.dsmserv.entity.energyMana.mmxuVolInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.sql.ResultSet;

@Mapper
public interface MmxuVolcDao {
    @Select({"select * from c_mmxu_vol_c where LD_ID=#{ldId} and DATA_TYPE=00100112 and DATA_DATE=#{queryDate}"})
    public mmxuVolInfo getMmxuVol(@Param("ldId")String ldId, @Param("queryDate")String queryDate);
}
