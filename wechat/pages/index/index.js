//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    error_code: 0,
    reason:'',
    result: {},
   resultcode:''
  },
 
  onLoad: function () {
    var page=1;
    var that=this
   that.getlist(page);
  },
  onPullDownRefresh:function(){
  var page = 1;
    var that = this
    that.getlist(page);
   
  },
  goHouseDetail:function(e){
    console.log(e)
    var content = e.currentTarget.dataset.content;

    console.log(content);

    wx.navigateTo({
      url: '../detail/detail?detail='+content,
    success:function(){

    },
    fail:function(e){
      console.log(e)
    }
    })
  },
  onReachBottom:function(){
  var page=page+1;
    var that = this
    that.getlist(page);
  },
  getlist: function(page) {
    var _this = this;
    wx.request({
      url: 'https://v.juhe.cn/joke/content/list.php?key=d1d429226085854ef142338ebfb92199&pagesize=10&sort=asc&' + 'page=' + page + '&time=' + 1418745237, 
      data: [{
        content: '',
        hashId: '',
        unixtime:0,
        updatetime:''
      }],
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        if (res.data.error_code==0)
        _this.setData({
          list_data: res.data.result.data,
          
          //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
  
        })
    
     
        
       
       
      }
    })
  }
})
