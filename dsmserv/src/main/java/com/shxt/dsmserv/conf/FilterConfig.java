package com.shxt.dsmserv.conf;

import com.shxt.dsmserv.filter.CrossDomainFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by misty on 2018/7/23.
 */
@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean filterRegist() {
        FilterRegistrationBean frBean = new FilterRegistrationBean();
        frBean.setFilter(new CrossDomainFilter());
        frBean.addUrlPatterns("/*");
        return frBean;
    }


}
