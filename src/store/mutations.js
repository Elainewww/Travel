export default{
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
    // localStorage是H5新提供的API，能提供类似cookie的功能，做到本地存储，比cookie更简单
    // 使用localStorage最好使用try catch 包裹，因为某些浏览器关闭本地村存储或隐身可能会导致抛出异常代码无法运行
  }
}
