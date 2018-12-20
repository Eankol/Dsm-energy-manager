<template>
    <div>
       <Row style="height:100%">
           <Col :span="5" :style="{height:'100%',overflow:'auto'}">
           <Tree ref="tree" :data="devs" @on-select-change="selectDev"></Tree>
           </Col>
           <Col :span="19" :style="{height:'100%',overflow:'auto',background:'#fffeff'}">
           <Layout>
               <Content class="content">
                   选择日期：
                   <DatePicker @on-change="getDate" :value="value2" format="yyyy-MM-dd" type="daterange" placement="bottom-start" placeholder="选择日期段" style="width: 200px"></DatePicker>
                   &emsp;
                   <Button type="primary" @click="toQuery()"><Icon type="ios-search"/>查询</Button>
                   </Select>&emsp;
                   <Button type="success"><Icon type="ios-cloud-download-outline" />导出</Button>
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
                    <Table :columns="columns1" :data="tableData"></Table>
                </Content>
           </Layout>
           </Col>
           
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


