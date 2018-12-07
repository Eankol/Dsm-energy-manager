package com.shxt.dsmserv.dao;

import com.shxt.dsmserv.entity.MenuInfo;
import org.apache.ibatis.annotations.*;

import java.util.ArrayList;

@Mapper
public interface MenuDao {

    @Select("select MENU_ID,PARENT_MENU_ID,MENU_LEVEL,MENU_NAME,ORDER_NO,MENU_STATE,MENU_ALIAS_NAME from dsm_web_menuinfo WHERE PARENT_MENU_ID=#{parentId} and MENU_STATE=1 and IS_VALID=1")
    @Results({
            @Result(column = "MENU_ID",property="menuId"),
            @Result(column = "PARENT_MENU_ID",property="parentMenuId"),
            @Result(column = "MENU_LEVEL",property="menuLevel"),
            @Result(column = "MENU_NAME",property="menuName"),
            @Result(column = "ORDER_NO",property="orderNo"),
            @Result(column = "MENU_STATE",property="menuState"),
            @Result(column = "MENU_ALIAS_NAME",property="menuAliasName")
    })
    public ArrayList<MenuInfo> getMenus(@Param("parentId")String parentId);


}
