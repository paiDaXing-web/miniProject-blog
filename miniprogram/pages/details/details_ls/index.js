
import task from "../../../utils/request.js"
import api from "../../../utils/api.js"
import f from "../replace"
Page({
  data: {},
  initial: function (id) {
    var that = this
   api.GET_history.doc=id
    task.Tree_get( api.GET_history).then(res => {
      let result = res.html
      result = f.replace(result)
      that.setData({
        html: result,
        xw_list: res
      })
    })
  },


  tz: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "../../../pages/" + e.currentTarget.dataset.url + "?wzid=" + e.currentTarget.dataset.id
    })
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.initial(options.id)

  },

})