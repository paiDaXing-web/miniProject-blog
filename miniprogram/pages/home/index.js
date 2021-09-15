const app = getApp()
import api from "../../utils/api.js"
import task from "../../utils/request.js"
Component({

  properties: {
    popr: {
      type: Number,
      default: 0
    },
  },

  data: {
    tz_list: [],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,

  },
  created() {
    this.initial()
  },
  methods: {
    initial() {
      task.Tree_get(api.GET_press_list).then(res => {
        this.setData({
          xw_list: res
        })
      })
      task.Tree_get(api.GET_press_top).then(res => {
        this.setData({
          tz_list: res
        })
      })
      task.Tree_cloud('userlist').then(res => {
        this.setData({
          userlist: res.data
        })
      })
      task.Tree_cloud('user_browse').then(res => {
        this.setData({
          t_data_rs: res.total + 23
        })
      })
    },
    tz(e) {
      wx.navigateTo({
        url: "../../pages/" + e.currentTarget.dataset.a + "?id=" + e.currentTarget.dataset.id
      })
    },
  }
})