// 云函数入口文件


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return event.a+event.b
}