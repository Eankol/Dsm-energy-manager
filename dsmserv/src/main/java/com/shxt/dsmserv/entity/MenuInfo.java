package com.shxt.dsmserv.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Map;

@Getter
@Setter
public class MenuInfo {
    private String menuId;
    private String parentMenuId;
    private String menuLevel;
    private String menuName;
    private String orderNo;
    private String menuState;
    private String menuAliasName;
    private ArrayList<MenuInfo> nodes;
}
