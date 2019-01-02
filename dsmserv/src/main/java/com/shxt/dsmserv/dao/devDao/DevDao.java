package com.shxt.dsmserv.dao.devDao;

import com.shxt.dsmserv.entity.devInfo.DevInfo;
import org.apache.ibatis.annotations.*;

import java.util.ArrayList;

@Mapper
public interface DevDao {
    @Select("select a.DSM_SYS_ID,a.DSM_LD_ID,a.DSM_LD_NAME,a.DSM_OBJTYPE_CODE,a.DSM_ENERGYTYPE_TYPE," +
            "a.CPY_CAP_NUM,a.CPY_LOAD_CAP,a.CPY_MONI_CAP,a.CPY_MEAS_METHOD,a.CPY_BASIC_FEE from " +
            "dsm_ld_dev a where a.DSM_LD_ID in (select child_id from dsm_grp_obj_relation_info where " +
            "parent_id=#{parentId} and IS_VALID=1 GROUP BY child_id) and a.IS_VALID=1")
    @Results({
            @Result(column = "DSM_SYS_ID",property="dsmSysId"),
            @Result(column = "DSM_LD_ID",property="dsmLdId"),
            @Result(column = "DSM_LD_NAME",property="title"),
            @Result(column = "DSM_LD_NAME",property="label"),
            @Result(column = "DSM_OBJTYPE_CODE",property="dsmObjtypeCode"),
            @Result(column = "DSM_ENERGYTYPE_TYPE",property="dsmEnergytypeType"),
            @Result(column = "CPY_CAP_NUM",property="cpyCapNum"),
            @Result(column = "CPY_LOAD_CAP",property="cpyLoadCap"),
            @Result(column = "CPY_MONI_CAP",property="cpyMoniCap"),
            @Result(column = "CPY_MEAS_METHOD",property="cpyMeasMethod"),
            @Result(column = "CPY_BASIC_FEE",property="cpyBasicFee")
    })
    public ArrayList<DevInfo> getDevInfo(@Param("parentId")String parentId);
}
