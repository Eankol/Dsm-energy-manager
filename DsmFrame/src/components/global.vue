<script>
const info= {
      baseURL:'', //服务端访问地址;
      operInfo:{}, //用户信息;
      openMenu:[]
    };

const setBaseURL=(addr)=>{
        info.baseURL=addr;
      };

export default {
    info,
    setBaseURL
}
</script>