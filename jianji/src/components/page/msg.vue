<template>
<div class="msg">
    <div class="right">
    	<input v-model="input" class="input_tile" placeholder="请输入关键字"></input>
	<button class="el-button el-button--primary" type="primary">搜索</button>
	<table class="table_th" border="0" cellspacing="0" align="center" v-if="infous">
		<thead>
			<tr>
				<th class="cell"  bgcolor="#20a0ff" v-for='info in infous'>{{info.th}}</th>
			</tr>
		</thead>
		<tbody>
			<tr></tr>
		</tbody>
		<tr v-for='main in items'>
			<td colspan="0" border="1">{{main.id}}</td>
			<td colspan="0" border="1">{{main.created_date}}</td>
			<!-- <td colspan="0" border="1" v-show='!flage' @click='chang'>已提交</td>
			<td colspan="0" border="1" v-show='flage'>未提交</td> -->
			<td colspan="0" border="1">未提交</td>
			<td colspan="0" border="1">{{main.last_modified_date}}</td>
			<td colspan="0" border="1">{{main.invoiceTitle}}</td>
			<td colspan="0" border="1">{{main.companyId}}</td>
			<td colspan="0" border="1">{{main.moneyAmount}}</td>
			<td colspan="0" border="1">{{main.email}}</td>
			<td colspan="0" border="1">{{main.contact}}</td>
			<td colspan="0" border="1">{{main.mobile}}</td>
			<td colspan="0" border="1">{{main.last_modified_date}}</td>
		</tr>
		<tr>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
			<td colspan="0" border="1"></td>
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
		<td colspan="0" border="1"></td>
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
	
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		

	</table>
    </div>
 
  </div>
</template>

<script>
   
// import axios from 'axios';
import http from '../../assets/js/http.js';
import mockData from '../../assets/js/mockData'
export default {

    data() {
      return {
       input:'',
       items: '',
       infous:[
       		{th:'序号'},
       		{th:'提交日期'},
       		{th:'发票状态'},
       		{th:'开票日期'},
       		{th:'公司名称'},
       		{th:'纳税人号'},
       		{th:'金额'},
       		{th:'邮箱'},
       		{th:'联系人'},
       		{th:'联系电话'},
       		{th:'发票号'},
       	]   
      }
    },
    mounted() {

    	// axios({
	    // 	url: 'http://qa.51jianji.com:10001/api/invoices',
	    // 	menthod: 'GET',
	    // 	headers: {
	    // 		'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ'
	    // 	}
	    // }).then((res) => {
    	// 	console.log(res)
    	// });
    	//
    	// 用js模拟后端数据格式，
    	this.items = mockData;
    	http.get('/api/invoices').then((res) => {
    		// 请求接口成功回调函数
    		// 正式数据在这里获取
    		console.log(res);
    		this.items = res.data;
    	}, (e) => {
    		console.error(e);
    	});
    }

}
</script>
<style scoped lang='less'>
.msg{
	position: absolute;
	left: 200px;
	top:70px;
	width: 80%;
}
	.input_tile{
		 -webkit-appearance: none;
	    -moz-appearance: none;
	    appearance: none;
	    background-color: #fff;
	    background-image: none;
	    box-sizing: border-box;
	    color: #1f2d3d;
	    font-size: 12px;
	    height: 30px;
	    line-height: 1;
	    outline: 0;
	    padding: 3px 10px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);

	  
	}
	.el-button el-button--primary{
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c4c4c4; 
    color: #1f2d3d;
    margin: 0; 
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
    border-radius: 4px;
	}
	.table_th{
		border-right: 1px solid #ccc; 
		margin-top: 15px;
		width:100%;
	}
	.table_th .cell{
		font-size: 14px;
		color:#fff;
		border-left: 1px solid #ccc;
		background: #20a0ff;
		height:30px;
		line-height: 30px;
	}
	.table_th td{
		font-size:14px; 
		height:25px;
		background-color: rgb(251, 253, 255);
		border-left: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		text-align: center;
	}
</style>