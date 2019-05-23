//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    content:''
  },
  onLoad: function (options) {
    var _this=this;
    _this.setData({
     content: options.content
    })
  
  }
})
