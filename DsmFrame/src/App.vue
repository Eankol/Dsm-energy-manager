<style lang="scss">
    .layout{

        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .layout-logo{
    width: 130px;
    background-color: #ffffff;
    height: 40px;
    float: left;
    position: relative;
    top: 10px;
    left: 15px;
    border-radius: 5px 5px;
}
.layout-nav{
    color: #ffffff;
    .ivu-menu-item{
        float: right;
        margin-right: 10px;
        color: #ffffff;
    }
}
    .layout-header-bar{
        background: #ffffff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .isHide{
        position: relative;
        background-color: #ffffff;
        border-radius: 0px 10px 10px 0px;
        float: right;
        top:10px;
        z-index: 999;
        right: -19px;
        box-shadow: 3px 3px 5px #444444;
    }
    .selecter{
        position: relative;
        float: right;
    }
    .menu-item{
        span{
        display: inline-block;
        overflow: hidden;
        width:100px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
        };
        i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
        }
    }
    .collapsed-menu{
        span{
        width: 0px;
        display: none;
        transition: width .2s ease;
        };
        i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    }
    .ivu-input-prefix{
        .ivu-icon{
            margin-left: -60px;
        }
    }
</style>
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
                    <MenuItem name="1-2">
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
                    </MenuItem>
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
<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                viewHeight:(window.innerHeight-150)+"px"
            }
        },
        mounted(){
         
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
