package com.shxt.dsmserv.entity.devInfo;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class DevInfo {
    private String dsmSysId;
    private String dsmLdId;
    private String title;
    private String label;
    private String dsmObjtypeCode;
    private String dsmEnergytypeType;
    private String cpyCapNum;
    private String cpyLoadCap;
    private String cpyMoniCap;
    private String cpyMeasMethod;
    private String cpyBasicFee;
    private ArrayList<DevInfo> children;
}
