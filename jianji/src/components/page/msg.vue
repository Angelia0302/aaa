<template>
    <div class="msg">

        <div class="admin-header">
            <div class="layer">
                <ul>
                    <li @click="LogOff">
                        简记
                    </li>
                    <li>
                        <a href="">
                            welcome to SHORT
                        </a>
                    </li>
                </ul>
                <p v-show="out">
                    退出登录
                </p>
            </div>
        </div>
        <div class="msg_top">
            <input v-model="input" class="input_tile" placeholder="请输入关键字">
            <button class="e-button">搜索</button>
        </div>
        <div class="switch">
            <el-switch
                @change="switchChange"
                v-model="value1"
                on-color="#50cb8d"
                off-color="#ccc">
            </el-switch>
        </div>
        <div class="right">
            <div class="tb_container" ref="tbContainer">
                <!-- 列表 -->
                <table ref="table" class="table_th" border="0" cellspacing="0" align="center" v-if="infous">
                    <thead>
                    <tr>
                        <th class="cell" bgcolor="#20a0ff" v-for='info in infous'>{{info.th}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for='(main, i) in items' class="hover">
                        <td colspan="0" border="1">{{pageStartIndex + i}}</td>
                        <td colspan="0" border="1" class="spanStyle">
                        <span @click.stop="billClick(i, 1)"
                              :class="{'btn-disable': !canSetClick(main.status)}">开票</span>
                            <span @click.stop="updateClick(i)"
                                  :class="{'btn-disable': !canUpdateClick(main.status)}">修改</span>
                            <span @click.stop="redClick(i, 4)"
                                  :class="{'btn-disable': !canRedClick(main.status)}">红票</span>
                            <span @click.stop="delClick(i)">删除</span>
                        </td>
                        <td colspan="0" border="1">{{getTime('yyyy-MM-dd', main.createdDate)}}</td>
                        <td colspan="0" border="1">{{statusText(main.status)}}</td>
                        <td colspan="0" border="1">{{getTime('yyyy-MM-dd', main.lastModifiedDate)}}</td>
                        <td colspan="0" border="1">{{main.companyName}}</td>
                        <td colspan="0" border="1">{{main.taxpayerIdentifyNumber}}</td>
                        <td colspan="0" border="1">{{main.moneyAmount}}</td>
                        <td colspan="0" border="1">{{main.email}}</td>
                        <td colspan="0" border="1">{{main.contact}}</td>
                        <td colspan="0" border="1">{{main.mobile}}</td>
                        <td colspan="0" border="1">{{main.invoiceNumber}}</td>
                        <td colspan="0" border="1">{{main.relationInvoiceNumber}}</td>
                        <td colspan="0" border="1">{{main.redInvoiceNumber}}</td>
                        <td colspan="0" border="1">{{main.重开原因}}</td>
                        <td colspan="0" border="1">{{main.info}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="star-overlay star-dialog-mask" v-show="maskShow"></div>
        <!-- 开票 -->
        <form class="from_xiu" v-show='alertType.setTicket'>
            <div class="modal-header">
                <a class="close" data-dismiss="modal">
                    <font @click="close('setTicket')">
                        <font>×</font>
                    </font>
                </a>
                <h3>
                    <font>
                        <font>开票</font>
                    </font>
                    <small></small>
                </h3>
            </div>
            <div class="top_fa">
                <p>
                    <label>
                        发票号
                    </label>
                    <input type="text" v-model="selectItem.invoiceNumber" placeholder="发票号">
                </p>
                <p>
                    <label>
                        重开关联票号
                    </label>
                    <input type="text" v-model="selectItem.relationInvoiceNumber" placeholder="输入后匹配检索效验">
                </p>
            </div>
            <div class="textear">
                <label>
                    备注
                </label>
                <textarea class="textar" name="" v-model="selectItem.info" placeholder="备注" id="textar" cols="50"
                          rows="4"></textarea>
            </div>
            <div class="button" style="text-align: right;">
                <button class="but1" @click="updateTicket">开票</button>
                <button class="but2" @click="close('setTicket')">取消</button>
            </div>
            <div class="from_tom">
                <div class="top_date">
                    <p class="date">
                        <label>
                            提交日期
                        </label>
                        <input class="sub-time" type="text" readonly v-model="selectItem.createdDate"
                               style="color: rgb(153, 153, 153);"/>
                    </p>
                    <p class="date set-time">
                        <label>
                            开票日期
                        </label>
                        <input class="" type="text" readonly v-model="selectItem.lastModifiedDate"
                               style="color: rgb(153, 153, 153)">
                    </p>
                </div>
                <div class="from_inp">
                    <label>
                        公司名称
                    </label>
                    <input type="text" readonly v-model="selectItem.companyName" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        纳税人号
                    </label>
                    <input type="text" readonly v-model="selectItem.taxpayerIdentifyNumber" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        开票金额
                    </label>
                    <input type="text" readonly v-model="selectItem.moneyAmount" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        邮箱
                    </label>
                    <input type="text" v-model="selectItem.email" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        联系人
                    </label>
                    <input type="text" v-model="selectItem.contact" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        联系电话
                    </label>
                    <input type="text" v-model="selectItem.mobile" placeholder="">
                </div>
            </div>
        </form>

        <!-- 修改 -->

        <form class="from_xiu" v-show='alertType.modifyShow' transition="fade">
            <div class="modal-header">
                <a class="close" data-dismiss="modal">
                    <font @click="close('modifyShow')"><font>×</font></font></a>
                <h3><font><font>开票 </font></font>
                    <small></small>
                </h3>
            </div>
            <div class="top_fa">
                <p>
                    <label>
                        发票号
                    </label>
                    <input type="text" v-model="selectItem.invoiceNumber" placeholder="发票号">
                </p>
                <p>
                    <label>
                        重开关联票号
                    </label>
                    <input type="text" v-model="selectItem.relationInvoiceNumber" placeholder="输入后匹配检索效验">
                </p>

            </div>
            <div class="textear">
                <label>
                    备注
                </label>
                <textarea name="" v-model="selectItem.info" placeholder="备注" id="textar" cols="50"
                          rows="4"></textarea>
            </div>
            <div class="button" style="text-align: right;">
                <button class="but1" @click="updateTicket">保存</button>
                <button class="but2" @click="close('modifyShow')">取消</button>

            </div>

            <div class="from_tom">
                <div class="heade">

                </div>
                <div class="top_date">
                    <p class="date">
                        <label>
                            提交日期
                        </label>
                        <input type="date" readonly v-model="selectItem.createdDate"
                               style="color: rgb(153, 153, 153);"/>
                    </p>
                    <p class="date">
                        <label>
                            开票日期
                        </label>
                        <input type="date" readonly v-model="selectItem.lastModifiedDate"
                        >
                    </p>
                </div>
                <div class="from_inp">
                    <label>
                        公司名称
                    </label>
                    <input type="text" readonly v-model="selectItem.companyName" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        纳税人号
                    </label>
                    <input type="text" readonly v-model="selectItem.taxpayerIdentifyNumber" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        开票金额
                    </label>
                    <input type="text" readonly v-model="selectItem.moneyAmount" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        邮箱
                    </label>
                    <input type="text" v-model="selectItem.email" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        联系人
                    </label>
                    <input type="text" v-model="selectItem.contact" placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        联系电话
                    </label>
                    <input type="text" v-model="selectItem.mobile" placeholder="">
                </div>
            </div>
        </form>

        <!-- 红票 -->
        <div class="red_trcked" v-show="alertType.redShow">
            <div class="modal-header">
                <a class="close" data-dismiss="modal">
                    <font @click="close('redShow')"><font>×</font></font></a>
                <h3><font><font>开票</font></font>
                    <small></small>
                </h3>
            </div>
            <p>
                <label>
                    红票发票号
                </label>
                <input type="text" v-model="selectItem.redInvoiceNumber">
            </p>
            <p>
                <label>
                    原发票号
                </label>
                <input type="text" readonly v-model="selectItem.invoiceNumber">
            </p>
            <div class="button" style="text-align: center;">
                <button class="but1" @click="updateTicket">确定</button>
                <button class="but2" @click="close('redShow')">取消</button>
            </div>
        </div>
        <!-- 删除弹框 -->
        <div class="delt" v-show='alertType.deltShow'>
            <div class="modal-header">
                <a class="close" data-dismiss="modal">
                    <font @click="close('deltShow')"><font>×</font></font></a>
                <h3><font><font>明确</font></font>
                    <small></small>
                </h3>
            </div>
            <p>确定删除吗？</p>
            <div class="button" style="text-align: right;">
                <button class="but1" @click="delCom">确定</button>
                <button class="but2" @click="close('deltShow')">取消</button>
            </div>
        </div>
        <div class="fenye">
            <el-pagination
                v-bind:current-Page="pageIndex + 1"
                v-bind:page-size="pageSize"
                :page-count="totalItems"
                layout="total,prev,pager,next,jumper"
                v-on:current-change="pageIndexChange">

            </el-pagination>
        </div>

    </div>
</template>

<script>

    import axios from 'axios';
    import http from '../../assets/js/http.js';
    import mockData from '../../assets/js/mockData';
    export default {
        name: 'msg',
        data () {
            return {
                input: '',
                items: '',
                out: true,
                value1: false,
                maskShow: false,
                setStatus: -1,
                // 全部数据
                totalData: [],
                tableData: [],
                totalItems: 1,
                pageIndex: 1,
                pageSize: 15,
                pageStartIndex: 1,
                // 选中的数据
                selectItem: {},
                // 填写开票的信息
                billData: {},
                // 填写红票
                redNumber: {},
                // alert type
                alertType: {
                    setTicket: false,
                    // 修改弹框
                    modifyShow: false,
                    // 红票弹框
                    redShow: false,
                    // 删除弹框
                    deltShow: false
                },
                infous: [
                    {th: '序号'},
                    {th: '操作'},
                    {th: '提交日期'},
                    {th: '发票状态'},
                    {th: '开票日期'},
                    {th: '公司名称'},
                    {th: '纳税人号'},
                    {th: '金额'},
                    {th: '邮箱'},
                    {th: '联系人'},
                    {th: '联系电话'},
                    {th: '发票号'},
                    {th: '重开关联票号'},
                    {th: '红票票号'},
                    {th: '重开原因'},
                    {th: '备注'}
                ]

            }
        },
        mounted () {
            // 用js模拟后端数据格式，
            this.totalData = mockData;
            this.tableData = this.countPage(this.pageSize);
            this.items = this.tableData.data[this.pageIndex];
            http.get('/api/invoices').then((res) => {
                // 请求接口成功回调函数
                // 正式数据在这里获取
                console.log(res);
                this.totalData = res;
                this.tableData = this.countPage(this.pageSize);
                this.items = this.tableData.data[this.pageIndex - 1];
            }, (e) => {
                console.error(e);
                this.showInfoAlert('失败');
            });
        },
        computed: {
        },
        methods: {
            switchChange (val) {
                let wrapperWidth = parseFloat(window.getComputedStyle(this.$refs.tbContainer, null).getPropertyValue('width'));
                let tbWidth = parseFloat(window.getComputedStyle(this.$refs.table, null).getPropertyValue('width'));
                if (val && wrapperWidth - tbWidth < 0) {
                    this.$refs.tbContainer.style.transform = `translate3d(${wrapperWidth - tbWidth}px, 0, 0)`;
                } else {
                    this.$refs.tbContainer.style.transform = `translate3d(0, 0, 0)`;
                }
            },
            getTime (fmt, time) {
                return this.dateFormat(fmt, time);
            },
            canSetClick (status) {
                return status == 1 || status == 3;
            },
            canUpdateClick (status) {
                return !this.canSetClick(status);
            },
            canRedClick (status) {
                return status == 2 || status == 5;
            },
            statusText (status) {
                let statusText = {
                    1: '待开票',
                    2: '已开票',
                    3: '重开待开',
                    4: '红票',
                    5: '重开已开'
                }
                return statusText[status];
            },
            // 获取选中的数据
            getSelected (ind) {
                if (!this.items) {
                    return false;
                }
                this.selectItem = this.items[ind];
                this.selectItem.index = ind;
            },
            // 开票
            billClick (i, status) {
                if (!this.canSetClick(this.items[i].status)) {
                    return false;
                }
                this.setStatus = status;
                this.getSelected(i);
                this.showModal('setTicket');
                this.maskShow = true;
            },
            updateTicket () {
                delete this.selectItem.index;
                this.showLoading();
                this.setStatus > -1 ? this.selectItem.status = this.setStatus : '';
                http.put('/api/invoices',
                    this.selectItem
                ).then((res) => {
                    this.hideLoading();
                    this.showSuccess();
                    console.log(res);
                    setTimeout(() => {
                        this.hideSuccess();
                    }, 200);
                    // 请求接口成功回调函数
                    // 正式数据在这里获取
                    // this.items.splice(this.selectItem.index, 1, res);
                    this.items.splice(this.selectItem.index, 1, this.selectItem);
                    this.selectItem = {};
                    this.setStatus = -1;
                    this.close('setTicket');
                }, (e) => {
                    this.setStatus = -1;
                    this.hideLoading();
                    console.error(e);
                    this.showInfoAlert('失败');
                });
            },
            updateClick (i) {
                if (!this.canUpdateClick(this.items[i].status)) {
                    return false;
                }
                this.getSelected(i);
                this.showModal('modifyShow');
                this.maskShow = true;
            },
            // 红票
            redClick (i, status) {
                if (!this.canRedClick(this.items[i].status)) {
                    return false;
                }
                this.setStatus = status;
                this.getSelected(i);
                this.showModal('redShow');
                this.maskShow = true;
            },
            // 删除
            delClick (i) {
                this.getSelected(i);
                this.showModal('deltShow');
                this.maskShow = true;
            },
            delCom () {
                this.showLoading();
                http.delete('/api/invoices').then((res) => {
                    // 请求接口成功回调函数
                    // 正式数据在这里获取
                    this.hideLoading();
                    this.showSuccess();
                    this.deltShow = false;
                    setTimeout(() => {
                        this.hideSuccess('删除成功！');
                        this.maskShow = false;
                        this.showModal('deltShow');
                    }, 200);
                    this.items.splice(this.selectItem.index, 1);
                    this.clone('deltShow');
                    this.setStatus = -1;
                }, (e) => {
                    this.setStatus = -1;
                    this.hideLoading();
                    this.showModal('deltShow');
                    this.showInfoAlert('失败');
                    console.error(e);
                });
            },
            // show modal
            showModal (type) {
                this.alertType[type] = true;
            },
            // close
            close (type) {
                this.alertType[type] = false;
                this.maskShow = false;
            },
            // 计算分页
            countPage (num = 15) {
                let len = this.totalData.length,
                    count = len / num >> 0,
                    temp = [];
                if (len % num > 0) {
                    this.totalItems = count = count + 1;
                }
                console.log(this.totalItems);
                for (let i = 0; i < len; i += num) {
                    temp.push(this.totalData.slice(i, i + num));
                }
                return {pages: count, data: temp};
            },
            LogOff () {
                this.out = true;
            },
            pageIndexChange (pageIndex) {
                this.pageIndex = pageIndex;
                this.items = this.tableData.data[this.pageIndex - 1];
                this.pageStartIndex = this.pageSize * (this.pageIndex - 1) + 1;
            },
            // 时间转换
            dateFormat (fmt, time) {
                let timeObj = new Date(time),
                    o = {
                    "M+": timeObj.getMonth()+1,                 // 月份
                    "d+": timeObj.getDate(),                    // 日
                    "h+": timeObj.getHours(),                   // 小时
                    "m+": timeObj.getMinutes(),                 // 分
                    "s+": timeObj.getSeconds(),                 // 秒
                    "q+": Math.floor((timeObj.getMonth()+3)/3), // 季度
                    "S": timeObj.getMilliseconds()             // 毫秒
                };
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (timeObj.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var k in o) {
                    if (new RegExp("("+ k +")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                    }
                }
                return fmt;
            }
        }
    };
</script>
<style scoped lang='less' rel="stylesheet/less">
    @import '../../assets/css/msg.less';
    @import '../../assets/css/animate.less';

    .msg {
        position: relative;
        width: 100%;
        min-height: 100%;
        padding-left: 180px;
        padding-right: 60px;
        padding-bottom: 50px;
        input {
            height: 25px;
            border: 1px solid #999;
            &::-webkit-input-placeholder {
                font-size: 14px;
            }
        }
    }
    .tb_container {
        transition: transform .4s;
    }
    /*
        表格样式
    */
    .right {
        overflow-x: hidden;
    }

    .layer {
        width: 105%;
        height: 49px;
        line-height: 49px;
        text-align: right;
        display: flex;
        background-color: #fefeff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.29);
        ul {
            width: 90%;
            display: flex;
            justify-content: flex-end;
            // border: 1px solid #000;
            align-items: center;
            cursor: pointer;
            li {
                max-width: 20%;
                padding-left: 20px;
                padding-right: 20px;
                border-right: 1px solid #ccc;
                height: 40px;
                line-height: 40px;
            }
        }
        p {
            padding-left: 30px;
            font-weight: bold;
            font-size: 17px;
            cursor: pointer;
        }
    }

    .table_th {
        border-right: 1px solid #ccc;
        margin-top: 15px;
        white-space: nowrap;
        cursor: pointer;
        .cell,
        td {
            vertical-align: middle;
        }

        .cell {
            font-size: 14px;
            color: #fff;
            border-left: 1px solid #ccc;
            background: #50CB8D;
            padding-left: 15px;
            padding-right: 15px;
            height: 40px;
            z-index: 2;
        }
        .spanStyle {
            span {
                width: 20px;
                height: 15px;

                padding: 5px 10px;
                border: 1px solid #50CB8D;
                margin: 5px;
                border-radius: 3px;
                color: #999;
                &.btn-disable {
                    background: #eeeeee;
                    border-color: #b3b0b0;
                }
            }
            span:nth-child(4) {
                background: #fff;
                color: red;
                border: 1px solid #ccc;

            }

        }

        td {
            font-size: 13px;
            height: 40px;
            border-left: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

    }

    .hover:hover {
        background: rgba(80, 180, 203, 0.1);
        z-index: 0;
    }

    /*
        搜索样式
    */
    .input_tile {
        height: 36px;
        padding: 10px 15px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    /*
        弹框样式
    */

    .from_xiu {
        z-index: 1002;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 480px;
        height: 500px;
        border-radius: 5px;
        background: #fff;
        .modal-header {
            padding: 9px 15px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
        }
        .close {
            float: right;
            font-size: 20px;
            font-weight: bold;
            line-height: 20px;
            color: #000;
            text-shadow: 0 1px 0 #ffffff;
            opacity: 0.2;
        }
        label {
            width: 120px;
            font-size: 14px;
            padding: 5px;
            text-align: left;
        }

        .top_fa {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 50px;
            transition: all .3s ease;
            input {
                width: 130px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
                border-radius: 3px;
            }
        }
        .textear {
            display: flex;
            justify-content: flex-start;
            label {
                width: 72px;
                display: block;
                text-align: center;
                font-size: 14px;
            }
            textarea {
                flex: 1;
                resize: vertical;
                border: 1px solid #999;
                margin-right: 16px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
                border-radius: 4px;
            }
        }
        .button {
            margin-top: 20px;
            margin-right: 30px;

            .but1, .but2 {
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                border: 1px solid #c4c4c4;
                color: #1f2d3d;
                margin: 5px;
                padding: 8px 20px;
                border-radius: 3px;
                color: #fff;
                background-color: #50CB8D;
                border: none;
                outline: none;
                font-size: 13px;
            }

            .but2 {
                background: #999;
            }
        }
        .from_tom {
            padding: 10px 16px 0;
            border-top: 1px solid #8C8C8C;
            input {
                height: 25px;
                font-size: 13px;
                padding-left: 10px;
                /* color: rgb(153, 153, 153); */
                border-radius: 3px;
                &[readonly] {
                    background: #dadada;
                    color: rgb(153, 153, 153);
                }
            }
            .top_date {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;

                p {
                    flex: 1;
                    text-align: left;
                }
                label {
                    text-align: left;
                    width: 60px;
                }
                input {
                    width: 120px;
                    text-align: center;
                    font-size: 14px;
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
                }
                .set-time {
                    text-align: right;
                    input {
                        text-align: center;
                    }
                }
            }
            .from_inp {
                margin-top: 10px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                label {
                    width: 70px;
                    display: block;
                    text-align: left;
                    font-size: 14px;
                }

                input {
                    flex: 1;
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
                }
            }
        }
    }

    // 删除
    .delt {
        z-index: 1002;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 295px;
        height: 172px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
        .modal-header {
            padding: 9px 15px;
            border-bottom: 1px solid #eee;
        }
        .close {
            float: right;
            font-size: 20px;
            font-weight: bold;
            line-height: 20px;
            color: #000;
            text-shadow: 0 1px 0 #ffffff;
            opacity: 0.2;
            cursor: pointer;
        }
        p {
            padding-top: 40px;
            text-align: center;
        }
        .button {
            margin-top: 20px;
            margin-right: 20px;
            .but1, .but2 {
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                border: 1px solid #c4c4c4;
                color: #1f2d3d;
                margin: 10px;
                padding: 8px 15px;
                color: #fff;
                background-color: #50CB8D;
                border-radius: 3px;
                border: none;
                outline: none;
            }
            .but2 {
                background: #999;
            }
            .button:hover {
                border: 1px solid #000;
            }
        }
    }

    // 红票
    .red_trcked {
        z-index: 1002;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 300px;
        height: 180px;
        border-radius: 3px;
        background: #fff;
        padding: 8px 10px 0;
        .modal-header {
            padding: 9px 10px;
            border-bottom: 1px solid #ccc;
        }
        .close {
            float: right;
            font-size: 20px;
            font-weight: bold;
            line-height: 15px;
            color: #000;
            text-shadow: 0 1px 0 #ffffff;
            opacity: 0.2;
        }
        p {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        label {
            width: 100px;
            display: block;
            text-align: left;
            font-size: 14px;
            margin-top: 15px;
        }
        input {
            margin-top: 10px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
            border-radius: 3px;
        }
        .button {
            margin-top: 10px;
            .but1, .but2 {
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                border: 1px solid #c4c4c4;
                color: #1f2d3d;
                margin: 8px;
                padding: 8px 15px;
                border-radius: 3px;
                color: #fff;
                background-color: #50CB8D;
                border: none;
                outline: none;
                text-align: right;

            }
            .but2 {
                background: #999;
            }
        }
    }

    // 分页

    .fenye {
        wdth: 100%;
        text-align: right;
        margin: 25px auto;
    }

    // 开关
    .switch {
        text-align: right;
    }

    /*遮罩*/
    .star-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1001;
    }

    .star-dialog-mask {
        background: #1f2226;
        opacity: .6;
    }
</style>
