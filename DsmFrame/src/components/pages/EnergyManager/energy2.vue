<template>
    <div style="padding:0 10px" id="mx">
        <h3>关系映射图</h3>
        // 写在前面：原始数据不要包含数组，否则你还需要重写比较json的方法，<br>
// 你也可以尝试，使用ES6的findIndex来重写整个方法，这取决于你的数据，<br>
// 如果数据量过多，可以试着去重新格式化数据内容，否则图可能不会正确显示，<br>
// 在option中去配置tooltip鼠标悬停提示信息，合理使用formatter，<br>
// 尽量在函数中使用箭头函数，这样你才可以合理的使用vue的this关键字，因为vue在滥用this；<br>
        <div id="main" style="width:700px;height:500px;">

        </div>
        
        
    </div>
</template>
<script src="./../../js/EnergyManager/energy2.js"></script>
<style lang="scss">
.t{
    background: rgba($color: #333333, $alpha: 0.8);
    position: relative;
    float: left;
    top:0;
    z-index: 1000;
    width: 200px;
    height: 300px;
}
.ts{

}
</style>



