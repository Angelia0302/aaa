import axios from 'axios';
// const baseURL = 'http://192.168.8.177:4210';
const baseURL = 'http://qa.51jianji.com:10001';
var http = axios.create({
    baseURL: baseURL,
    headers: {
    	'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDE4NDc5Njd9.uUklDBnznwClxt9k90vrogGyUEGZRHncXlgx_W5F4CijzKEqucjnGSlcaiH9rFtLU2iYAfUTtin5rBlgiWqpoQ'
    }
});
// http.defaults.headers.common["Authorization"] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ'
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
// axios.create({
//   baseURL:"",
//   headers: {'Origin':'192.168.8.177'}
// });
export default http;
