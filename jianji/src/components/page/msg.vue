<template>
<div class="msg">
	<div class="msg_top">
		<input v-model="input" class="input_tile" placeholder="请输入关键字">
		<button class="el-button el-button--primary" type="primary">搜索</button>

	</div>
    <div class="right">
    	
	<table class="table_th" border="0" cellspacing="0" align="center" v-if="infous">
		<thead>
			<tr>
				<th class="cell"  bgcolor="#20a0ff" v-for='info in infous'>{{info.th}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for='main in items'>
				<td colspan="0" border="1">{{main.id}}</td>
				<td colspan="0" border="1">
					<span>开票</span>
					<span>修改</span>
					<span>红票</span>
					<span>删除</span>
				</td>
				<td colspan="0" border="1">{{main.created_date}}</td>
				<td colspan="0" border="1">{{main.last_modified_date}}</td>
				<td colspan="0" border="1">{{main.invoiceTitle}}</td>
				<td colspan="0" border="1">{{main.companyId}}</td>
				<td colspan="0" border="1">{{main.moneyAmount}}</td>
				<td colspan="0" border="1">{{main.email}}</td>
				<td colspan="0" border="1">{{main.contact}}</td>
				<td colspan="0" border="1">{{main.mobile}}</td>
				<td colspan="0" border="1">{{main.last_modified_date}}</td>
				<td colspan="0" border="1">{{main.invoiceTitle}}</td>
				<td colspan="0" border="1">{{main.companyId}}</td>
				<td colspan="0" border="1">123154645123154645</td>
				<td colspan="0" border="1">16514564</td>
				<td colspan="0" border="1">25145614</td>	
			</tr>
		</tbody>
		

	</table>
	<!-- 开票 -->
	<form class="from_p" width="500px" v-show='flage'>
		<div id="lab" class="ax_default label">
                    <div class="text">
                      <p><span>发票号</span></p>
                    </div>
        </div>
		<div class="ax_default text_field">
              <input id="u_input" type="text" value="自动带入" style="color: rgb(153, 153, 153);">
         </div>
         <div id="rigt" class="ax_default label">
                    <div class="text">
                      <p><span>重开关联号</span></p>
                    </div>
        </div>
		<div class="text_fie">
              <input id="input_b" type="text" value="输入后匹配检索效验" style="color: rgb(153, 153, 153);">
         </div>
         <div class="ax_default label beizhu">
                      <p><span>备注</span></p>
                  </div>
         <div class="ax_default text_area">
                    <textarea style="color: rgb(153, 153, 153);width:350px"></textarea>
         </div>
         <div class="button" style="text-align: right;">
			<button class="but1" @click="visible2 = false">确定</button>
		    <button class="but2" @click="visible2 = false">取消</button>
		    
		  </div>
		  <div class="mssge">
		  	<label class="label_bot">
		  		公司名称
		  	</label>
		  	<input type="text" value="自动带入" style="color: rgb(153, 153, 153);width:350px;height:15px">
		  </div><div class="mssge">
		  	<label class="label_bot">
		  		纳税人号
		  	</label>
		  	<input type="text" value="自动带入" style="color: rgb(153, 153, 153);width:350px;height:15px">
		  </div><div class="mssge">
		  	<label class="label_bot">
		  		开票金额
		  	</label>
		  	<input type="text" value="自动带入" style="color: rgb(153, 153, 153);width:350px;height:15px">
		  </div><div class="mssge">
		  	<label class="label_bot">
		  		邮箱
		  	</label>
		  	<input type="text" value="自动带入" style="color: rgb(153, 153, 153);width:350px;height:15px">
		  </div><div class="mssge">
		  	<label class="label_bot">
		  		联系人
		  	</label>
		  	<input type="text" value="自动带入" style="color: rgb(153, 153, 153);width:350px;height:15px">
		  </div><div class="mssge">
		  	<label class="label_bot">
		  		联系电话
		  	</label>
		  	<input type="text" value="自动带入" style="color: rgb(153, 153, 153);width:350px;height:15px">
		  </div>
	</form>
		<!-- 删除弹框 -->
		<div class="delt" v-show='flage'>
			<p style="color:red">确定删除吗？</p>
			<div class="button" style="text-align: right;">
			<button class="but1" @click="visible2 = false">确定</button>
		    <button class="but2" @click="visible2 = false">取消</button>
		    
		  </div>
		</div>
    </div>
 
  </div>
</template>

<script>
   
import axios from 'axios';
import http from '../../assets/js/http.js';
import mockData from '../../assets/js/mockData'
export default {

    data() {
      return {
       input:'',
       items: '',
       flage:false,
       infous:[
       		{th:'序号'},
       		{th:'操作'},
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
       		{th:'重开关联票号'},
       		{th:'红票票号'},
       		{th:'重开原因'},
       		{th:'备注'}
       	],
      }
    
    },
  
    mounted() {

    	/*axios({
	    	url: 'http://192.168.8.177:4210/api/invoices',
	    	menthod: 'GET',
	    	headers: {
	    		'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDE1NTgzODN9.0jpKqEb_ZOEXXwLi26ypuIt1EApqLKdo0z8ciliC3P9nQ52WBcN-TAHYrGbI773msdCbwdeT20VyYaE2mlf43A'
	    	}
	    }).then((res) => {
    		console.log(res);
    		this.items = res.data;
    	});*/
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
	position: relative;
	left: 0;
	top:0;
	width:80%;
}
.right{
	position: absolute;
	top:70px;
	left:180px;
	width:100%;
	overflow-x: auto;
}
.msg_top{
	position: absolute;
	top:30px;
	left:180px;
	width:100%;
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
		white-space:nowrap;
	}
	.table_th .cell{
		font-size: 14px;
		color:#fff;
		border-left: 1px solid #ccc;
		background: #20a0ff;
		padding-left: 15px;
		padding-right: 15px;
		height:30px;
	}
	.table_th td{
		font-size:14px; 
		height:40px;
		border-left: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		text-align: center;
	}
	.label_width{
		width:100px;
		border: 1px solid #000;
		display: inline-block;
		text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 5px 6px 5px 0;
    box-sizing: border-box;
	}
	.input_inner{
	-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #999;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 25px;
    line-height: 1;
    width:150px;
    outline: 0;
    padding-right: 20px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.delt{
	width: 295px;
	height: 172px;
	border: 1px solid #000;
	position: relative;
	top:20%;
	left:40%;
	p{
		text-align: center;
		color:red;
	}
	.button{
		margin-top:70px;
		margin-right: 20px;
		.but1,.but2{
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #c4c4c4;
    color: #1f2d3d;
    margin: 0;
    padding: 8px 10px;
     color: #fff;
    background-color: #20a0ff;
    border:none;
    outline: none;

		}
		.but2{
   			background: #999;
		}
	}
}
.from_p{
	    border-width: 0px;
    position: absolute;
    left: 40px;
    top: 50px;
    width: 484px;
    height: 456px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(121, 121, 121, 1);
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    .ax_default{
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #333333;
    line-height: normal;
    }
    .text_field{
   	border-width: 0px;
    position: absolute;
    left: 74px;
    top: 20px;
    width: 132px;
    height: 25px;
   
    #u_input{
   /*  position: absolute;
   left: 0px;
   top: 0px; */
    width: 132px;
    height: 25px;
    box-sizing: border-box;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    text-decoration: none;
    color: #000000;
    text-align: left;
    }

   }
    .text_fie{
   	border-width: 0px;
   position: relative;
   left: 80px;
   top: 15px;
   width: 132px;
   height: 25px;
    #input_b{
    position: absolute;
    left: 220px;
    top: 0px;
    width: 132px;
    height: 25px;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    text-decoration: none;
    color: #000000;
    } 
   
    }
    .label{
    	    font-size: 14px;
    		text-align: left;
    }
    .beizhu{
    	    border-width: 0px;
    position: absolute;
    left: 21px;
    top: 50px;
    width: 29px;
    height: 20px;
    }
    #lab{
   	border-width: 0px;
    position: absolute;
    left: 21px;
    top: 5px;
    width: 43px;
    height: 20px;
    }
    #rigt{
    	    border-width: 0px;
    position: absolute;
    left: 220px;
    top: 5px;
    width: 85px;
    white-space: nowrap;
    }
    .text_area{
   	border-width: 0px;
    position: absolute;
    left: 74px;
    top: 67px;
    width: 600px;
    height: 45px;
    outline: none;

    }
    .button{
    	width:483px;
		margin-top:130px;
		border-bottom: 1px solid #000;

		.but1,.but2{
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #c4c4c4;
    color: #1f2d3d;
    margin: 0;
    padding: 8px 10px;
     color: #fff;
    background-color: #20a0ff;
    border:none;
    outline: none;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 15px;

		}
		.but2{
   			background: #999;
		}
	}
	.mssge{
		margin-top: 20px;
		.label_bot{
		font-size: 14px;
    	width:200px;
    	text-align: center;
	}
	input{
		width:300px;
	}
	}
	
}
</style>