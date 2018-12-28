<template>
   <div class="in">
       <div class="mainBor" align='center'>
           <h2>功能选择</h2>
           <div @click="goRouter('1')">
               <Icon type="md-pulse" />
               能管系统
            </div>
           <div @click="goRouter('http://192.168.254.94:10008/cea/login.html')">
               <Icon type="md-build" />
               设置
            </div>
           <div>
               <Icon type="md-bookmark" />
               关于
            </div>
       </div>
       <canvas id="canvas"></canvas>
   </div>
</template>
<script src="./../js/index.js"></script>

<style lang="scss" scoped>
.in{
    position: fixed;
    float: left;
    top: 0px;
    left: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
    z-index: 10000;
    margin: 0;
    cursor: none;
    border-radius: 0;  
    .mainBor{
        width: 80%;
        background: #ffffff;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        min-height: 100px;
        padding:10px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        div{
            cursor: pointer;
            margin:10px;
            width: 100px;
            position: relative;
            background-color: #ffffff;
            box-shadow: 2px 2px 1px #666666,-2px -2px 1px #666666;
            padding:10px;
            border-radius: 5px;
            transition: all 0.3s;
            display: inline-block;
            i{
                display: block;
                font-size: 20px;
                animation: ico 1s infinite alternate;
            }
        }
        div:hover{
            transform: scale(1.2,1.2);
            box-shadow: 2px 3px 5px #1576b6,-1px -2px 6px #1576b6;
            i{
                color: #1576b6;
                animation: icoh 0.4s infinite alternate;
            }
        }
        @keyframes ico
        {
            from {transform: translateY(-10%);}
            to {transform: translateY(0%);}
        }
        @keyframes icoh
        {
            from {transform: scale(1,1);}
            to {transform: scale(1.2,1.2);}
        }

    }
} 

</style>

