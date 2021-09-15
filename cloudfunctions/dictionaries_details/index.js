// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "mxm1923893223-ulteh",
})
const db = cloud.database({
  env: "mxm1923893223-ulteh",
})
const _ = db.command
cloud.init()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  async function pota() {
    let su = await db.collection('dictionaries').doc(event.id).update({
      data: {
        browse: _.inc(1),
      }
    })

    return {
      su: su,
    }
  }
  return await pota()
}