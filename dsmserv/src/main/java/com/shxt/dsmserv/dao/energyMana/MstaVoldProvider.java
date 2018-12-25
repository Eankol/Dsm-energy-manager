package com.shxt.dsmserv.dao.energyMana;

public class MstaVoldProvider {
    public String sql(String startDate,String endDate,String ldId){
        return "select a.dsm_ld_name,b.* from dsm_ld_dev a RIGHT JOIN " +
                "(select DSM_LD_ID,DATE_FORMAT(DATA_DATE,'%Y-%m-%d') as date,MAX_VOL " +
                "from dsm_msta_vol_d where DATA_DATE BETWEEN '"+startDate+"' " +
                "and '"+endDate+"' and DSM_LD_ID="+ldId+" and DATA_TYPE=00100111 )b on b.DSM_LD_ID=a.DSM_LD_ID";
    }

    public String sqlTwo(String startDate,String endDate,String ldId, String a, String b){
        return "select a.dsm_ld_name,b.* from dsm_ld_dev a RIGHT JOIN " +
                "(select DSM_LD_ID,DATE_FORMAT(DATA_DATE,'%Y-%m-%d') as date,MAX_VOL " +
                "from dsm_msta_vol_d where DATA_DATE BETWEEN '"+startDate+"' " +
                "and '"+endDate+"' and DSM_LD_ID IN ("+ldId+") and DATA_TYPE=00100111 )b on b.DSM_LD_ID=a.DSM_LD_ID LIMIT "+a+","+b+"";
    }

    public String sqlT(String startDate,String endDate,String ldId){
        return "select COUNT(*) from dsm_ld_dev a RIGHT JOIN " +
                "(select DSM_LD_ID,DATE_FORMAT(DATA_DATE,'%Y-%m-%d') as date,MAX_VOL " +
                "from dsm_msta_vol_d where DATA_DATE BETWEEN '"+startDate+"' " +
                "and '"+endDate+"' and DSM_LD_ID IN ("+ldId+") and DATA_TYPE=00100111 )b on b.DSM_LD_ID=a.DSM_LD_ID";
    }

    public String sqlTT(String startDate,String endDate,String ldId){
        return "select a.dsm_ld_name,b.* from dsm_ld_dev a RIGHT JOIN " +
                "(select DSM_LD_ID,DATE_FORMAT(DATA_DATE,'%Y-%m-%d') as date,MAX_VOL " +
                "from dsm_msta_vol_d where DATA_DATE BETWEEN '"+startDate+"' " +
                "and '"+endDate+"' and DSM_LD_ID IN ("+ldId+") and DATA_TYPE=00100111 )b on b.DSM_LD_ID=a.DSM_LD_ID";
    }
}
