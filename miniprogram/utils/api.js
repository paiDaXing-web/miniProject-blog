var task = require("./request.js")
const app = getApp()
const db = wx.cloud.database({
  env: "mxm1923893223-ulteh"
})
const _ = db.command



var orderBy = ['_createTime', 'desc']



module.exports = {
  GET_Book: {
    collec: 'Book'
  },
  GET_press: {
    collec: 'press'
  },
  GET_history: {
    collec: 'history'
  },

  GET_user:{
    collec:'user' 
  },
  GET_interview_ms: {
    collec: 'interview',
    orderBy,
    where: {
      select: _.neq(true),
    },
    limit: 4
  },
  GET_press_ms: {
    collec: 'press',
    limit: 4,
    orderBy,
    where: {
      Type: "ms"
    }
  },
  GET_press_list: {
    collec: 'press',
    limit: 20,
    orderBy,
    where: {
      browse: _.gt(10)
    }
  },
  GET_history_list: {
    collec: 'history',
    orderBy
  },
  GET_press_top: {
    collec: 'press',
    where: {
      Top: true
    }
  },
  GET_answer: {
    collec: 'answer',
    orderBy
  },

  GET_press_browse: {
    collec: 'press',
    limit: 20,
    orderBy: ['browse', 'desc']
  },
}