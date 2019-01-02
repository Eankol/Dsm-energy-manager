<template>
    <div>
        多树切换，异步树操作，带图标,可搜索，可拖拽的树，根据需求自定义
        <div><Button @click="changeData('1')">设备</Button><Button @click="changeData('2')">行政楼宇</Button></div>
        <Input
  placeholder="输入关键字进行过滤"
  v-model="filterText"
  style="width:200px"
  >
</Input>
        <el-tree class="filter-tree" :filter-node-method="filterNode" :data="devs" ref="tree2" :render-content="renderContent"
  draggable
  show-checkbox
  @check-change="selectDev"
        ></el-tree>
    </div>
</template>
<script src="./../../js/EnergyManager/energy.js"></script>
