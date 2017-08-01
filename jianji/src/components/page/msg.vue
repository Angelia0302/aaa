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
  			<tr v-for='(main, i) in items'>
  				<td colspan="0" border="1">{{main.id}}</td>
  				<td colspan="0" border="1">
  					<span @click.stop="billClick(i, main.id)">开票</span>
  					<span @click.stop="updateClick(i, main.id)">修改</span>
  					<span @click.stop="redClick(i, main.id)">红票</span>
  					<span @click.stop="delClick(i, main.id)">删除</span>
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
    <form class="from_xiu"  v-show='tickeInfoShow'>
      <div class="top_fa">
      <p>
        <label>
          发票号
        </label>
        <input type="text" v-model="billData.invoiceNumber" placeholder="发票号">
      </p>
      <p>
        <label>
          重开关联票号
        </label>
        <input type="text" v-model="billData.输入后匹配检索效验" placeholder="输入后匹配检索效验" >
      </p>
        
      </div>
      <div class="textear">
        <label>
          备注
        </label>
        <textarea name="" v-model="billData.remark" placeholder="备注" id="textar" cols="50" rows="4"></textarea>
      </div>
      <div class="button" style="text-align: right;">
      <button class="but1" @click="setTicket">确定</button>
        <button class="but2" @click="visible2 = false">取消</button>
        
      </div>
      <div class="from_tom">
        <div class="top_date">
          <p class="date">
        <label>
          提交日期
        </label>
        <input type="date" v-model="selectItem.提交日期" style="color: rgb(153, 153, 153);"/>
      </p>
      <p class="date">
        <label>
          开票日期
        </label>
        <input type="date"  v-model="selectItem.开票日期" style="color: rgb(153, 153, 153)">
      </p>
        </div>
      <div class="from_inp">
        <label>
          公司名称
        </label>
        <input type="text" v-model="selectItem.公司名称" placeholder="">  
      </div><div class="from_inp">
        <label>
          纳税人号
        </label>
        <input type="text" v-model="selectItem.联系电话" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          开票金额
        </label>
        <input type="text" v-model="selectItem.开票金额" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          邮箱
        </label>
        <input type="text" v-model="selectItem.邮箱" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          联系人
        </label>
        <input type="text" v-model="selectItem.联系人" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          联系电话
        </label>
        <input type="text" readonly v-model="selectItem.联系电话" placeholder="">  
      </div>
      </div>
    </form>
    <!-- 修改 -->
    <form class="from_xiu"  v-show='modifyShow'>
      <div class="top_fa">
      <p>
        <label>
          发票号
        </label>
        <input type="text" v-model="billData.invoiceNumber" placeholder="发票号">
      </p>
      <p>
        <label>
          重开关联票号
        </label>
        <input type="text" v-model="billData.输入后匹配检索效验" placeholder="输入后匹配检索效验" >
      </p>
        
      </div>
      <div class="textear">
        <label>
          备注
        </label>
        <textarea name="" v-model="billData.remark" placeholder="备注" id="textar" cols="50" rows="4"></textarea>
      </div>
      <div class="button" style="text-align: right;">
      <button class="but1" @click="setTicket">确定</button>
        <button class="but2" @click="visible2 = false">取消</button>
        
      </div>
      <div class="from_tom">
        <div class="top_date">
          <p class="date">
        <label>
          提交日期
        </label>
        <input type="date" v-model="selectItem.提交日期" style="color: rgb(153, 153, 153);"/>
      </p>
      <p class="date">
        <label>
          开票日期
        </label>
        <input type="date"  v-model="selectItem.开票日期" style="color: rgb(153, 153, 153)">
      </p>
        </div>
      <div class="from_inp">
        <label>
          公司名称
        </label>
        <input type="text" v-model="selectItem.公司名称" placeholder="">  
      </div><div class="from_inp">
        <label>
          纳税人号
        </label>
        <input type="text" v-model="selectItem.联系电话" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          开票金额
        </label>
        <input type="text" v-model="selectItem.开票金额" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          邮箱
        </label>
        <input type="text" v-model="selectItem.邮箱" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          联系人
        </label>
        <input type="text" v-model="selectItem.联系人" placeholder="">  
      </div>
      <div class="from_inp">
        <label>
          联系电话
        </label>
        <input type="text" readonly v-model="selectItem.联系电话" placeholder="">  
      </div>
      </div>
    </form>
    <!-- 红票 -->
    <div class="red_trcked" v-show="redShow">
        <p>
          <label>
            红票发票号
          </label>
          <input type="text" v-model="redNumber.红票发票号">
        </p>
        <p>
          <label>
            原发票号
          </label>
          <input type="text" v-model="redNumber.原发票号">
        </p>
        <div class="button" style="text-align: center;">
        <button class="but1" @click="visible2 = false">确定</button>
        <button class="but2" @click="visible2 = false">取消</button>        
      </div>
    </div>
    <!-- 删除弹框 -->
    <div class="delt" v-show='delShow'>
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
       // 开票弹框
       tickeInfoShow: false,
       // 修改弹框
       modifyShow: false,
       // 删除弹框
       delShow: false,
       // 红票弹框
       redTrcked:false,
       // 选中的数据
       selectItem: {},
       // 填写开票的信息
       billData: {},
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
    },
    methods: {
      // 开票
      billClick (i) {
        if (!this.items) {return false;}
        this.selectItem = this.items[i];
        this.selectItem.index = i;
         this.tickeInfoShow = true;
      },
      setTicket () {
        http.put('/api/invoices/' + this.selectItem.id,{
        data:{
                  id: this.selectItem.id,
                  invoiceNumber: this.billData.invoiceNumber,
                  remark: this.billData.remark
                }
              }
        ).then((res) => {
          // 请求接口成功回调函数
          // 正式数据在这里获取
          this.items.splice(this.selectItem.index, 1, res);
          this.selectItem = {};
          this.billData = {};
           this.tickeInfoShow = false;
        }, (e) => {
          console.error(e);
        });
      },
      // 修改
      updateClick (i) {
        if (!this.items) {return false;}
        this.selectItem = this.items[i];
        this.selectItem.index = i;
         this.modifyShow = true;
      },
      setTicket () {
        http.put('/api/invoices/' + this.selectItem.id,{
        data:{
                  id: this.selectItem.id,
                  invoiceNumber: this.billData.invoiceNumber,
                  remark: this.billData.remark
                }
              }
        ).then((res) => {
          // 请求接口成功回调函数
          // 正式数据在这里获取
          this.items.splice(this.selectItem.index, 1, res);
          this.selectItem = {};
          this.billData = {};
           this.modifyShow = false;
        }, (e) => {
          console.error(e);
        });
      },
      // 红票
      redClick(){
        http.put()
      }
 
    }
};
</script>
<style scoped lang='less'>
@import '../../assets/css/msg.less';
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

</style>