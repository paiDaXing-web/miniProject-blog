const app = getApp()
const db = wx.cloud.database({
  env: "mxm1923893223-ulteh"
})
const _ = db.command

function Tree_cloud(name, data) {
  console.log(app.config.mock)
  if (app.config.mock) {
    console.log("1")
    wx.showToast({
      title: '您未开启云环境，进入开发环境',
    })
    let promise = new Promise(function (resolve, reject) {
      resolve("1");

    })
    return promise
  } else {
    let promise = new Promise(function (resolve, reject) {
      wx.cloud.callFunction({
        name,
        data,
        success: function (res) {
          resolve(res.result);
        },
        fail: function (res) {
          console.log(res)
          wx.showToast({
            title: String(res),
            icon: 'none',
            duration: 3000
          })
          reject(res.result);
        }
      })
    })
    return promise
  }

}

// function Tree_get(data, func) {
//   console.log(data)
//   if (app.config.mock) {
//     wx.showToast({
//       title: '您未开启云环境，进入开发环境',
//     })
//     var str = "123";
//     let promise = new Promise(function (resolve, reject) {
//       wx.request({
//         url: baseURL + url,
//         method: method,
//         data: method === POST ? JSON.stringify(data) : data,
//         header: header,
//         success(res) {

//         },
//         fail(err) {
//           //请求失败
//           reject(err)
//         }
//       })
//     })

//   } else {
//     // db.collection(data.collec).where(data.where).limit(data.limit).orderBy(data.orderBy).doc(data.doc)
//     let promise = new Promise(function (resolve, reject) {

//       data.get({
//         success: function (res) {
//           console.log(res)
//           resolve(res.data);
//         },
//         fail: function (res) {
//           console.log(res)
//           wx.showToast({
//             title: String(res),
//             icon: 'none',
//             duration: 3000
//           })
//           reject(res.result);
//         }
//       })
//     })
//     return promise



//   }

// }


function Tree_get(data, func) {

  if (app.config.mock) {
    wx.showToast({
      title: '您未开启云环境，进入开发环境',
    })
    var str = "123";
    let promise = new Promise(function (resolve, reject) {
      wx.request({
        url: baseURL + url,
        method: method,
        data: method === POST ? JSON.stringify(data) : data,
        header: header,
        success(res) {

        },
        fail(err) {
          //请求失败
          reject(err)
        }
      })
    })
  } else {
    let promise = new Promise(function (resolve, reject) {
      let DB = db.collection(data.collec)
      if (data.where) {
        DB = DB.where(data.where)
      }
      if (data.limit) {
        DB = DB.limit(data.limit)
      }
      if (data.orderBy) {
        DB = DB.orderBy(data.orderBy[0], data.orderBy[1])
      }
      if (data.doc) {
        DB = DB.doc(data.doc)
      }
      
      DB.get({
        success: function (res) {
          console.log(res)
          resolve(res.data);
        },
        fail: function (res) {
          console.log(res)
          wx.showToast({
            title: String(res),
            icon: 'none',
            duration: 3000
          })
          reject(res.result);
        }
      })
    })
    return promise



  }

}
module.exports = {
  Tree_cloud,
  Tree_get,
}