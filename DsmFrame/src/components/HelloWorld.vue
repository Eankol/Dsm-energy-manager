<template>
  <div class="hello">
    <div style="padding:20px">
      <h3>说明：</h3>
      <p>
        <ol>
          <li>使用sass来定义样式，写法可以同css,文件后缀为.scss</li>
          <li>组件：iview , echartst , axios , sweetAlert</li>
          <li>sweetAlert已在全局注册，需要使用alert()的地方，都可以换成swal()</li>
          <li>部分引入echarts</li>
        </ol>
      </p>
      <h3>
        iview常用组件及配置：
      </h3>
      <p>
        <ol>
          <li>
            <ul>图标:
              <li><Icon type="md-add" /><Icon type="ios-add-circle" /><Icon type="md-add-circle" />
              <Icon type="ios-alarm" /><Icon type="md-alarm" /><Icon type="ios-albums" />
              <Icon type="ios-albums-outline" /><Icon type="ios-alert" /><Icon type="ios-alert-outline" />
              <Icon type="ios-apps" /><Icon type="ios-apps-outline" /><Icon type="md-arrow-down" />
              <Icon type="ios-arrow-down" /><Icon type="md-arrow-back" /><Icon type="ios-arrow-back" />
              <Icon type="ios-battery-full" /><Icon type="ios-battery-dead" /><Icon type="ios-battery-charging" />
              <Icon type="ios-bookmark" /><Icon type="ios-bookmark-outline" /><Icon type="ios-briefcase" />
              <Icon type="ios-briefcase-outline" /><Icon type="ios-cafe" /><Icon type="ios-cafe-outline" />
              <Icon type="ios-tennisball" />
              </li>
              <li>使用：<textarea><Icon type="ios-battery-charging" /></textarea><Icon type="ios-battery-charging" /></li>
              <li>说明:复制的<textarea><ion-icon name="alarm"></ion-icon></textarea>使用ios-‘name值’替换type。<a href="https://ionicons.com/" target="_blank">详情</a></li>
            </ul>
          </li>
          <li>
            <ul>按钮:
              <li><textarea><Button>默认</Button></textarea><Button>默认</Button></li>
              <li><textarea><Button type="primary">普通</Button></textarea><Button type="primary">普通</Button></li>
              <li><textarea><Button type="dashed">边框</Button></textarea><Button type="dashed">边框</Button></li>
              <li><textarea><Button type="text">文本</Button></textarea><Button type="text">文本</Button></li>
              <li><textarea><Button type="info">消息</Button></textarea><Button type="info">消息</Button></li>
              <li><textarea><Button type="success">成功</Button></textarea><Button type="success">成功</Button></li>
              <li><textarea><Button type="warning">警告</Button></textarea><Button type="warning">警告</Button></li>
              <li><textarea><Button type="error">错误</Button></textarea><Button type="error">错误</Button></li>
            </ul>
          </li>
        </ol>
      </p>
    </div>
     <Button name="selc" @click="slcData()">查询</Button>
     <br/>
     <div id="main" :style="{width: '300px', height: '300px'}">
       ?
     </div>

  </div>
</template>

<script src="./js/basic/basic.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p{
  li{font-size:13px}
}

</style>
