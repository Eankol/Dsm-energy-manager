package com.shxt.dsmserv.dao.energyMana;

public class MmxuVolcDaoProvider {
    public String sql(String ldId,String queryDate){
        return "select b.dsm_ld_name,a.* from c_mmxu_vol_c a LEFT JOIN dsm_ld_dev b on " +
                "b.dsm_ld_id=a.LD_ID where a.LD_ID in("+ldId+") and a.DATA_TYPE=00100112 " +
                "and a.DATA_DATE='"+queryDate+"'";
    }
}
