<template>
    <div>
       <Row style="height:100%">
           <div :span="5" :style="{height:'100%',float:'left',width:'20%'}">
           	<Input v-model="selData" placeholder="搜索……" style="width:100%;margin-left:0px" @on-change="selectMenu()"/>
         <div :style="{overflow:'auto',height:'93%'}">
          <Tree ref="tree" :data="devs" @on-select-change="selectDev"></Tree>
           </div>
     </div>
           <div :span="19" :style="{height:'100%',overflow:'auto',background:'#fffeff',width:'80%'}">
           <Layout>
               <Content class="content">
                   选择日期：
                   <DatePicker @on-change="getDate" :value="value2" format="yyyy-MM-dd" type="daterange" placement="bottom-start" placeholder="选择日期段" style="width: 200px"></DatePicker>
                   &emsp;
                   <Button type="primary" @click="toQuery()"><Icon type="ios-search"/>查询</Button>
                   </Select>&emsp;
                   <Button type="success" @click="export2Excel()"><Icon type="ios-cloud-download-outline" />导出</Button>
                </Content>
                <Content class="content">
                    <div id="main" class="eboxHide ebox">
                    </div>
                </Content>
                <Content class="content">
                    <div id="main2" class="eboxHide ebox">
                    </div>
                </Content>
                <Content class="content">
                    <Table :columns="columns1" :data="tableData" ref="table"></Table>
                </Content>
                <Content class="content">
                    <Page :total="pageTotal" :current="a" :page-size="b" :page-size-opts="c" :placement="d" show-elevator show-sizer show-total placement="top" @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>
                </Content>
           </Layout>
          </div>
       </Row>
    </div>
</template>
<script src="./../../js/EnergyManager/dsmPowerModelConsumption.js"></script>
<style lang="scss" scoped>
.content{
    background-color: #ffffff;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}
i{
    font-size:18px
}
.eboxHide{
    transition: all 0.5s;
}
.ebox{
    width: 100%;
    height: 350px;
    min-width: 700px;
}
</style>


