const cloud = require('wx-server-sdk')
cloud.init({
  env: "mxm1923893223-ulteh",
})
const db = cloud.database({
  env: "mxm1923893223-ulteh",
}) // 初始化数据库

exports.main = async (event, context) => {
  return   await    db.collection('dictionaries').get()
}