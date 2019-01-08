<template>
  <div class="hello">
    <div style="padding:20px">
     <div class="menu">
       <h3 style="text-align:center;color:#ffffff">菜单</h3>
       <div style="background:#ffffff;padding:5px;margin-top:10px;border-radius:3px;height:300px;overflow:auto">
         <ol>
           <li>
             <span @click="rollTo('说明')">说明</span>
           </li>
           <li>
             <span @click="rollTo('常用组件')">常用组件</span>
             <ul>
               <li>
                 <span @click="rollTo('按钮')">按钮</span>
               </li>
               <li>
                 <span @click="rollTo('输入框')">输入框</span>
                 <ul>
                   <li>普通</li>
                   <li>带图标</li>
                   <li>复合型</li>
                 </ul>
               </li>
               <li>
                 <span @click="rollTo('日期选择')">日期选择</span>
                 <ul>
                   <li>年，月，季度</li>
                   <li>日，单选，多选，区间</li>
                   <li>时分秒，时间段</li>
                 </ul>
               </li>
               <li>
                 <span @click="rollTo('标签页')">标签页</span>
               </li>
               <li>
                 <span @click="rollTo('下拉菜单')">下拉菜单</span>
               </li>
               <li>
                 <span @click="rollTo('文件上传')">文件上传</span>
                 <ul>
                   <li>单文件</li>
                   <li>多文件</li>
                   <li>拖拽上传</li>
                 </ul>
               </li>
               <li>
                 <span @click="rollTo('步骤提示')">步骤提示</span>
               </li>
               <li>
                 <span @click="rollTo('分页')">分页</span>
               </li>
               <li>
                 <span @click="rollTo('表格')">表格</span>
                 <ul>
                 <li>普通，可展开，可勾选</li>
                 <li>自定义表头</li>
                 </ul>
               </li>
               <li>
                 <span @click="rollTo('滑块')">滑块</span>
               </li>
               <li>
                 <span @click="rollTo('提醒')">提醒</span>
                 <ul>
                   <li>可自动关闭</li>
                   <li>加载中</li>
                   <li>通知</li>
                   <li>仅有标题的通知</li>
                 </ul>
               </li>
               <li>
                 <span @click="rollTo('弹出框')">弹出框</span>
               </li>
               <li>
                 <span @click="rollTo('加载提醒')">加载提醒</span>
               </li>
               <li>
                 <span @click="rollTo('统计图')">统计图</span>
               </li>
             </ul>
           </li>
         </ol>
       </div>
     </div>
     <h2>
       对于开发者很重要的一些话：<br>
       如果你是开发者，以下这些话可以避免你踩到很多坑！<br>
       “得益于” VUE.JS在滥用this关键字，我们在使用其他前端组件时候，特别是配置项json时候，如果需要用function去创建匿名函数去做处理，
       请尽量使用ES6的箭头函数,如：name:(value)=>{ return value.name }，这样如果你需要调用已有的methods的时候，才可以用vue的this正确调用，
       至于为什么要用箭头函数，因为箭头函数中没有this，这样才可以正确指向vue的this！<br>
       <br><br>
     </h2>
      <h3>说明：<a name="说明"></a></h3>
      <p>
        <ol>
          <li>使用sass来定义样式，写法可以同css,文件后缀为.scss</li>
          <li>组件：iview , echartst , axios , sweetAlert</li>
          <li>sweetAlert已在全局注册，需要使用alert()的地方，都可以换成swal()</li>
          <li>兼容IE版本10+</li>
          <li>使用全局变量储存会话信息，而非localstrange,在老版本浏览器中有更好的体验，兼容性更强。</li>
          <li>使用babel-polyfile,使老版本浏览器可以使用ES6的新特性</li>
        </ol>
      </p>
      <h3>
        常用组件：<a name="常用组件"></a>
      </h3>
      <p>
        <ol>
          <li>
            <ul>按钮: <a name="按钮"></a>
              <li><Button>默认</Button><Button type="primary">普通</Button><Button type="dashed">边框</Button>
              <Button type="text">文本</Button>
              <Button type="info">消息</Button><Button type="success">成功</Button>
            <Button type="warning">警告</Button><Button type="error">错误</Button></li>
            </ul>
          </li>
          <li>
            <ul>
              输入框: <a name="输入框"></a>
              <li>
                普通：<Input placeholder="请输入" clearable style="width: 200px" />
              </li>
              <li>带图标：
                <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
                <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
                <Input search placeholder="Enter something..." style="width: auto" />
                <Input search enter-button placeholder="Enter something..." style="width: auto"  />
                <Input search enter-button="搜索" placeholder="Enter something..." style="width: auto"  />
              </li>
              <li>复合型：
                <Input style="width: 400px">
                <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </Input>
    <br>
    <Input style="width: 400px">
        <Select slot="prepend" style="width: 80px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
        </Select>
        <Select slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
        </Select>
    </Input>
    <br>
    <Input style="width: 400px">
        <Select slot="prepend" style="width: 80px">
            <Option value="day">日</Option>
            <Option value="month">月</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
    </Input>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              日期选择：<a name="日期选择"></a>
              <li>
             年 <DatePicker type="year" placeholder="Select year" style="width: 150px"></DatePicker>
             月 <DatePicker type="month" placeholder="Select month" style="width: 150px"></DatePicker>
             季度<Select  style="width:100px">
        <Option>一季度</Option>
        <Option>二季度</Option>
        <Option>三季度</Option>
        <Option>四季度</Option>
    </Select>
     年<Select  style="width:100px">
        <Option>上半年</Option>
        <Option>下半年</Option>
    </Select>
              </li>
              <li>
                日期单选
                 <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                日期多选
                <DatePicker type="date" multiple placeholder="Select date" style="width: 200px"></DatePicker>
                日期段选择
                 <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
              </li>
              <li>
                时分秒选择（定时任务可用） <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
                时间段<TimePicker format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        
              </li>
            </ul>
            
          </li>
          <li>
            <ul>
              标签页 <a name="标签页"></a>
              <li>
                <Tabs style="width:300px">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              下拉菜单 <a name="下拉菜单"></a>
              <li>
                <Dropdown>
        <a href="javascript:void(0)">
            选项
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>电压</DropdownItem>
            <DropdownItem>电量</DropdownItem>
            <DropdownItem disabled>电能示值</DropdownItem>
        </DropdownMenu>
    </Dropdown>
     <Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>电压</DropdownItem>
            <DropdownItem>电量</DropdownItem>
            <DropdownItem disabled>电能示值</DropdownItem>
            <DropdownItem>电能示值</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    嵌套：<Dropdown>
        <a href="javascript:void(0)">
            选项
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>年报</DropdownItem>
            <DropdownItem>月报</DropdownItem>
            <DropdownItem>季度</DropdownItem>
            <Dropdown placement="right-start">
                <DropdownItem>
                    日报
                    <Icon type="ios-arrow-forward"></Icon>
                </DropdownItem>
                <DropdownMenu slot="list">
                    <DropdownItem>电压</DropdownItem>
                    <DropdownItem>电流</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </DropdownMenu>
    </Dropdown>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              文件上传 <a name="文件上传"></a>
              <li>
                单文件<Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    多文件
    <Upload
        multiple
        action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    拖拽上传
    <Upload
        multiple
        type="drag"
        style="width:400px"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0;width:400px">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              步骤提示 <a name="步骤提示"></a>
              <li>
                <Steps :current="1">
        <Step title="配置父采集点" content="这里是该步骤的描述信息"></Step>
        <Step title="配置基本信息" content="这里是该步骤的描述信息"></Step>
        <Step title="配置定时任务" content="这里是该步骤的描述信息"></Step>
        <Step title="保存" content="这里是该步骤的描述信息"></Step>
    </Steps>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              分页 <a name="分页"></a>
              <li>
                <Page :total="100" show-sizer />
                更多效果在其他页面中查看
              </li>
            </ul>
          </li>
          <li>
            <ul>
              表格 <a name="表格"></a>
              <li>
                普通表格，可展开表格及可勾选表格在其他页面均有实例
              </li>
              <li>
                自定义表头：
                <Select v-model="model10" multiple style="width:260px" @on-change="changeTitle">
                <Option value="电压,p">电压</Option>
                <Option value="电量,v">电量</Option>
                <Option value="电流,a">电流</Option>
                </Select>
                <Table border :columns="columns1" :data="data1"></Table>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              滑块 <a name="滑块"></a>
              <li>
                <Slider style="width:300px"></Slider>
    <Slider range style="width:300px"></Slider>
    <Slider range disabled style="width:300px"></Slider>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              消息提醒： <a name="提醒"></a>
              <li>可自动关闭提醒<Button @click="success">消息提醒</Button>
    <Button @click="warning">警告提醒</Button>
    <Button @click="error">错误提醒</Button></li>
              <li>
                加载中
                <Button @click="loading">加载中</Button>
              </li>
              <li>
                通知<Button @click="info(false)">消息</Button>
    <Button @click="success(false)">成功</Button>
    <Button @click="warning(false)">警告</Button>
    <Button @click="error(false)">错误</Button>
              </li>
              <li>
                仅有标题的通知
                <Button @click="info(true)">消息</Button>
    <Button @click="success(true)">成功</Button>
    <Button @click="warning(true)">警告</Button>
    <Button @click="error(true)">错误</Button>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              模态框 <a name="弹出框"></a>
              <li>
                <Button type="primary" @click="modal1 = true">显示
                </Button>
    <Modal
        v-model="modal1"
        title="弹出框"
        width="900"
        >
        <p>假装有内容</p>
        <p>假装自己是图</p>
        <p>假装自己是表格</p>
    </Modal>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              加载提醒 <a name="加载提醒"></a>
              <li>
                <div class="pa">
                  加载状态~~~~~~
                  <Spin size="large" fix v-if="spinShow"></Spin>
                </div>
    <br>
    切换显示状态：<i-switch @on-change="spinShow = !spinShow"></i-switch>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              统计图 <a name="统计图"></a>
              <li>
                更多统计图请参考其他页面实例
              </li>
              <li>
                <Button name="selc" @click="slcData()">查询</Button>
     <br/>
     <div style="position:relative;width:300px">
     <div id="main" :style="{width: '300px', height: '300px'}">
       图
       
     </div>
     <Spin size="large" fix v-if="isshow"></Spin>
     </div>
              </li>
            </ul>
          </li>
        </ol>
      </p>
    </div>
     

  </div>
</template>

<script src="./js/basic/basic.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p{
  li{font-size:13px}
}
button{
  margin-right: 10px;
}
li{
  margin-bottom: 10px
}
.pa{
  position: relative;
}
.menu{
  width: 300px;
  background:rgba($color:  #0a9fe4, $alpha: 0.8);
  position: absolute;
  right: 50px;
  z-index: 1000;
  padding: 10px;
  border-radius: 10px;
  height: 40px;
  transition: all 0.5s;
  overflow: hidden;
  span{
    color: #0a9fe4;
    cursor: pointer;
  }
}
.menu:hover{
  height: auto;
}

</style>
