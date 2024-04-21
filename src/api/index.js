import httpUtil from '../utils/httpUtil'

// 登录
export function fetchLogin(params) {
	return httpUtil.post("/api/login", params)
}

// 注册
export function fetchRegister(params) {
	return httpUtil.post("/api/reguser", params)
}

// 查询订单列表
export function getOrderList(params) {
	return httpUtil.post("/my/order/getOrderList", params)
}

// 删除订单
export function deleteOrder(params) {
	return httpUtil.post("/my/order/deleteOrder", params)
}
