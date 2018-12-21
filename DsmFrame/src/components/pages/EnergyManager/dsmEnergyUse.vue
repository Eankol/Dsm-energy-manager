<template>
    <div>
       <Row style="height:100%">
           <Col :span="5" :style="{height:'100%',overflow:'auto'}">
           <Tree ref="tree" :data="devs" @on-select-change="selectDev" :multiple="true"></Tree>
           </Col>
           <Col :span="19" :style="{height:'100%',overflow:'auto',background:'#fffeff'}">
           <Layout>
               <Content class="content">
                   选择日期：
                   <DatePicker ref="datePicker" value="yyyy-MM-dd" @on-change="getDate" type="date" placeholder="选择日期" style="width: 120px"></DatePicker>
                    <Select v-model="selectType" style="width:100px">
                        <Option value="1">电量</Option>
                        <Option value="2">电压</Option>
                        <Option value="3">电流</Option>
                    </Select>&emsp;
                   <Button type="primary" @click="toQuery()"><Icon type="ios-search"/>查询</Button>
                   </Select>&emsp;
                   <Button type="success"><Icon type="ios-cloud-download-outline" />导出</Button>
                </Content>
                <Content class="content">
                    <div :id="id" class="eboxHide">
                    </div>
                </Content>
           </Layout>
           </Col>
           
       </Row>
    </div>
</template>
<script src="./../../js/EnergyManager/dsmEnergyUse.js"></script>
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
    height: 400px;
    min-width: 700px;
}
</style>


