<style src="./../components/css/app/app.scss" lang="scss"></style>
<template>
    <div class="layout">
        <Layout>
            <Header style="padding:0;margin:0;background:#114b5f;color:#ffffff;height:60px;">
            <Menu mode="horizontal" theme="dark"  active-name="1" :style="{width:'100%',background:'#114b5f',color:'#ffffff',height:'60px','box-shadow':'2px 2px 10px #333333'}">
                    <div class="layout-logo">
                        <img src="./../assets/logo.png" width="100%"/>
                    </div>
                    <div style="position:relative;float:left;margin-left:20px"><h3>上海协同</h3></div>
                    <div class="layout-nav" :style="{color:'#ffffff'}">
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            User
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Config
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            About
                        </MenuItem>
                        
                    </div>
                </Menu>
            </Header>
            <Layout>
              <Sider ref="side1" hide-trigger collapsible :collapsed-width="1" v-model="isCollapsed" :style="{padding:'0px',margin:'0px',background:'#ffffff','box-shadow':'3px 3px 10px #333333',overflow:'visible'}">
               <div class="isHide"> <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0px'}" type="md-menu" size="20"></Icon></div>
                <Menu ref="side_menu" :active-name="activeBtn" width="auto" :open-names="openMenu" :class="menuitemClasses" @on-select="onSelect" accordion>
                   <div style="padding:0px 10px 20px 10px;width:200px;">
                       <Input v-model="selData" prefix="ios-search" placeholder="搜索……" style="width:100%;margin-left:0px" @on-change="selectMenu()"/>
                    </div>
                    <div style="position:relative;height:100%;overflow:auto">
                    <Submenu v-for="menu in menusData.menus" :name="menu.menuId" :key="menu.menuId" >
                        <template slot="title">
                            <span>{{menu.menuName}}</span>
                        </template>
                        <MenuItem v-for="option in menu.nodes" :name="option.reference" :key="option.menuId">
                            <span>{{option.menuName}}</span>
                        </MenuItem>
                    </Submenu>
                    </div>
                </Menu>
            </Sider>
                
                <Content class="conts">
                 <div :style="{background:'#ffffff','border-bottom':'1px #eeeeef solid',padding:'10px 10px 0px 10px',height:'46px','text-align':activeMenu.length<6?'':'center'}">
                  <span><Icon type="md-arrow-dropleft" class="tl" v-show="activeMenu.length<6?false:true"  @click="toLeft()"/></span>
                    <span v-show="activeMenu.length<6?false:true" >···</span>
                    <span class="titleBtn" v-for="m in sptActive()">
                         <span :class="m.style" @click="onSelect(m.reference)">{{m.menuName}}</span>
                         <Icon type="md-close" v-show="(activeMenu.length>1?true:false)" @click="delActive(m.reference)"/>
                    </span>
                    <span v-show="activeMenu.length<6?false:true" >···</span>
                    <span><Icon type="md-arrow-dropright" class="tr" v-show="activeMenu.length<6?false:true" @click="toRight()"/></span>
                 </div>
                 <div style="clear:both;margin:0;padding:0"></div>
    <keep-alive>
    <router-view :style="{background: '#fff', minHeight: '100px',height:viewHeight,overflow:'auto'}"/>
    </keep-alive>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script src="./../components/js/app/app.js" scoped></script>
