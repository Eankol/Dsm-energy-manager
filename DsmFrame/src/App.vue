<style src="./components/css/app/app.scss" lang="scss"></style>
<template>
    <div class="layout">
        <Layout>
            <Header style="padding:0;margin:0;background:#114b5f;color:#ffffff;height:60px;">
            <Menu mode="horizontal" theme="dark"  active-name="1" :style="{width:'100%',background:'#114b5f',color:'#ffffff',height:'60px','box-shadow':'2px 2px 10px #333333'}">
                    <div class="layout-logo">
                        <img src="./assets/logo.png" width="100%"/>
                    </div>
                    <div style="position:relative;float:left;margin-left:20px"><h3>上海协同</h3></div>
                    <div class="layout-nav" :style="{color:'#ffffff'}">
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Config
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            About
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            User
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
              <Sider ref="side1" hide-trigger collapsible :collapsed-width="75" v-model="isCollapsed" :style="{padding:'0px',margin:'0px',background:'#ffffff','box-shadow':'3px 3px 10px #333333',overflow:'visible'}">
               <div class="isHide"> <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0px'}" type="md-menu" size="20"></Icon></div>
                <Menu active-name="1-2" width="auto" :class="menuitemClasses">
                   <div style="padding:0px 10px 20px 10px">
                       <Input prefix="ios-search" placeholder="搜索……" style="width:100%;margin-left:0px" />
                    </div>
                    <div style="position:relative;height:100%;overflow:auto">
                    <Submenu v-for="menu in menusData.menus" :name="menu.menuId">
                        <template slot="title">
                            <span>{{menu.menuName}}</span>
                        </template>
                        <MenuItem v-for="option in menu.nodes" :name="option.menuId">
                            <span>{{option.menuName}}</span>
                        </MenuItem>
           
                    </Submenu>
                    </div>
                    <!--<MenuItem name="1-2">
                        <Icon type="ios-navigate"></Icon>
                        <span>电能分析</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-search"></Icon>
                        <span>电能时比分析</span>
                    </MenuItem>
                    <MenuItem name="1-4">
                        <Icon type="ios-settings"></Icon>
                        <span>用电安全分析</span>
                    </MenuItem>-->
                </Menu>
            </Sider>
                
                <Content :style="{margin: '20px 20px 20px 20px',height:'100%','box-shadow':'1px 1px 5px #333333','border-radius':'20px 20px 0px 0px'}">
                    <Menu mode="horizontal" active-name="1" style="height:50px;padding:0px;margin:0px">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
                    <router-view :style="{background: '#fff', minHeight: '100px',height:viewHeight,overflow:'auto'}"/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script src="./components/js/app/app.js"></script>
