package com.shxt.dsmserv.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// 此为为前端曝露出的链接测试接口，保留以便于前端配置服务器地址

@RestController
public class connectTest {
    @GetMapping("/test")
    public String testConnect(){
        return "success";
    }
}
