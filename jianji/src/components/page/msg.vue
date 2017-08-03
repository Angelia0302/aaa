<template>
    <div class="msg">
        <div class="msg_top">
            <input v-model="input" class="input_tile" placeholder="请输入关键字">
            <button class="el-button el-button--primary" type="primary">搜索</button>
        </div>
        <div class="right">
            <!-- 列表 -->
            <table class="table_th" border="0" cellspacing="0" align="center" v-if="infous">
                <thead>
                    <tr>
                        <th class="cell" bgcolor="#20a0ff" v-for='info in infous'>{{info.th}}</th>
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
                        <td colspan="0" border="1">{{main.createdDate}}</td>
                        <td colspan="0" border="1">{{main.status}}</td>
                        <td colspan="0" border="1">{{main.lastModifiedDate}}</td>
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
        <!-- 开票 -->
        <form class="from_xiu" v-show='alertType.setTicket'>
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
                    <input type="text" v-model="billData.relationInvoiceNumber" placeholder="输入后匹配检索效验">
                </p>
            </div>
            <div class="textear">
                <label>
                    备注
                </label>
                <textarea class="textar" name="" v-model="billData.info" placeholder="备注" id="textar" cols="50"
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
                    <input type="text" v-model="selectItem.email" readonly placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        联系人
                    </label>
                    <input type="text" v-model="selectItem.contact" readonly placeholder="">
                </div>
                <div class="from_inp">
                    <label>
                        联系电话
                    </label>
                    <input type="text" readonly v-model="selectItem.mobile" placeholder="">
                </div>
            </div>
        </form>
        <!-- 修改 -->
        <form class="from_xiu" v-show='alertType.modifyShow'>
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
                    <input type="text" v-model="billData.relationInvoiceNumber" placeholder="输入后匹配检索效验">
                </p>

            </div>
            <div class="textear">
                <label>
                    备注
                </label>
                <textarea name="" v-model="billData.info" placeholder="备注" id="textar" cols="50"
                          rows="4"></textarea>
            </div>
            <div class="button" style="text-align: right;">
                <button class="but1" @click="setTicket">保存</button>
                <button class="but2" @click="close('modifyShow')">取消</button>

            </div>
            <div class="from_tom">
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
                    <input type="text" readonly v-model="selectItem.mobile" placeholder="">
                </div>
            </div>
        </form>
        <!-- 红票 -->
        <div class="red_trcked" v-show="alertType.redShow">
            <p>
                <label>
                    红票发票号
                </label>
                <input type="text" v-model="redNumber.redInvoiceNumber">
            </p>
            <p>
                <label>
                    原发票号
                </label>
                <input type="text" readonly v-model="redNumber.invoiceNumber">
            </p>
            <div class="button" style="text-align: center;">
                <button class="but1" @click="visible2 = false">确定</button>
                <button class="but2" @click="close('redShow')">取消</button>
            </div>
        </div>
        <!-- 删除弹框 -->
        <div class="delt" v-show='alertType.deltShow'>
            <p style="color:red">确定删除吗？</p>
            <div class="button" style="text-align: right;">
                <button class="but1" @click="visible2 = false">确定</button>
                <button class="but2" @click="close('deltShow')">取消</button>
            </div>
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
                flage: false,
                // 选中的数据
                selectItem: {},
                // 填写开票的信息
                billData: {},
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
            // 获取选中的数据
            getSelected (ind) {
                if (!this.items) {
                    return false;
                }
                this.selectItem = this.items[ind];
                this.selectItem.index = ind;
            },
            // 开票
            billClick (i) {
                this.getSelected(i);
                this.showModal('setTicket');
            },
            updateTicket () {
                http.put('/api/invoices/' + this.selectItem.id, {
                    data: {
                        id: this.selectItem.id,
                        invoiceNumber: this.billData.invoiceNumber,
                        remark: this.billData.remark
                    }
                }).then((res) => {
                    // 请求接口成功回调函数
                    // 正式数据在这里获取
                    this.items.splice(this.selectItem.index, 1, res);
                    this.selectItem = {};
                    this.billData = {};
                    this.close('setTicket');
                }, (e) => {
                    console.error(e);
                });
            },
            updateClick (i) {
                this.getSelected(i);
                this.showModal('modifyShow');
            },
            // 红票
            redClick (i) {
                this.getSelected(i);
                this.showModal('redShow');
            },
            // 删除
            delClick (i) {
                this.getSelected(i);
                this.showModal('deltShow');
            },
            // show modal
            showModal (type) {
                this.alertType[type] = true;
            },
            // close
            close (type) {
                this.alertType[type] = false;
            }
        }
    };
</script>
<style scoped lang='less' rel="stylesheet/less">
    @import '../../assets/css/msg.less';

    .msg {
        position: relative;
        width: 100%;
        min-height: 100%;
        padding-left: 180px;
        padding-right: 60px;
        overflow: hidden;
        input {
            height: 25px;
            border: 1px solid #999;
            &::-webkit-input-placeholder{
                font-size: 14px;
            }
        }
    }

    /*
        表格样式
    */
    .right {
        margin-top: 20px;
        overflow-x: auto;
    }

    .table_th {
        border-right: 1px solid #ccc;
        margin-top: 15px;
        white-space: nowrap;

        .cell,
        td {
            vertical-align: middle;
        }

        .cell {
            font-size: 14px;
            color: #fff;
            border-left: 1px solid #ccc;
            background: #20a0ff;
            padding-left: 15px;
            padding-right: 15px;
            height: 30px;
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
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 480px;
        height: 500px;
        border: 1px solid #000;
        background: #fff;
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
            input {
                width: 130px;
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
                padding: 8px 10px;
                border-radius: 5px;
                color: #fff;
                background-color: #20a0ff;
                border: none;
                outline: none;
            }

            .but2 {
                background: #999;
            }
        }
        .from_tom {
            padding: 10px 16px 0;
            border-top: 1px solid #000;
            input {
                height: 25px;
                font-size: 14px;
                color: rgb(153, 153, 153);
                &[readonly] {
                    background: #dadada;
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
                }
            }
        }
    }
    // 删除
    .delt {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 295px;
        height: 172px;
        border: 1px solid #000;
        p {
            padding-top: 20px;
            text-align: center;
            color: red;
        }
        .button {
            margin-top: 70px;
            margin-right: 20px;
            .but1, .but2 {
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
                border: none;
                outline: none;
            }
            .but2 {
                background: #999;
            }
        }
    }
    // 红票
    .red_trcked {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 300px;
        height: 170px;
        border: 1px solid #000;
        background: #fff;
        padding: 20px 10px 0;
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
        }
        .button {
            margin-top: 35px;
            .but1, .but2 {
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                border: 1px solid #c4c4c4;
                color: #1f2d3d;
                margin: 5px;
                padding: 8px 10px;
                border-radius: 5px;
                color: #fff;
                background-color: #20a0ff;
                border: none;
                outline: none;

            }
            .but2 {
                background: #999;
            }
        }
    }
</style>
