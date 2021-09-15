// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "mxm1923893223-ulteh",
})
const db = cloud.database({
  env: "mxm1923893223-ulteh",
}) // 初始化数据库


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()



 let sc= await db.collection('collect').where({ _openid: wxContext.OPENID,}).count()
 let dz= await db.collection('statr').where({ _openid: wxContext.OPENID,}).count()
 let nt= await db.collection('note').where({ _openid: wxContext.OPENID,}).count()
 let tk =await db.collection('interview_collect').where({ _openid: wxContext.OPENID,}).count()


  return {
  sc:sc.total,dz:dz.total,nt:nt.total,tk:tk.total
  }
}