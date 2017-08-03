import Vue from 'vue';
import conf from '../../config';
let appThis = null;
export default function () {
	Vue.mixin({
		data () {
			return {
				/**
				 * loading
				 */
				dataLoad: false,
                // 显示信息
                showInfo: false,
                infoMsg: '',
                // confirm alert
                isConfirm: false,
                confirmMsg: '',
                cnfLTBtn: '取消',
                // 成功提示
                hasSuccess: false,
                successText: '',
                /*
                 * 防止重复点击
                 * send -- 事件类型
                 * @value false -- 未点击
                 * @value true -- 已点击
                 * */
                clickIden: {
                    save: false,
                    send: false,
                    bind: false
                }
			};
		},
		methods: {
            /*
             * 保存app.vue component的this对象
             * */
            saveAppThis (_this) {
                _this ? appThis = _this : '';
            },
			/**
			 * loading
			 */
			showLoading () {
				appThis.dataLoad = true;
			},
			hideLoading () {
				appThis.dataLoad = false;
			},
            /*
            * 显示提示框
            * */
            showInfoAlert (msg) {
                appThis.infoMsg = msg;
                appThis.showInfo = true;
            },
            // 关闭信息提示框
            infoOk () {
                appThis.showInfo = false;
            },
            // confirm show
            showConfirm ({msg = '', cancelCB, confirmCB, cnfLTBtn = '取消'}) {
                appThis.confirmMsg = msg;
                appThis.isConfirm = true;
                appThis.cnfLTBtn = cnfLTBtn;
                cancelCB ? appThis.cancelCB = cancelCB : '';
                confirmCB ? appThis.confirmCB = confirmCB : '';
            },
            // confirm cancel
            cancel () {
                typeof appThis.cancelCB === 'function' ? appThis.cancelCB() : '';
                appThis.cancelCB = null;
                appThis.isConfirm = false;
                appThis.cnfLTBtn = '取消';
            },
            // confirm 确定事件
            comfirm () {
                typeof appThis.confirmCB === 'function' ? appThis.confirmCB() : '';
                appThis.confirmCB = null;
                appThis.isConfirm = false;
                appThis.cnfLTBtn = '取消';
            },
            // success
            showSuccess (msg) {
                appThis.successText = msg || '保存成功';
                appThis.hasSuccess = true;
            },
            // 隐藏success
            hideSuccess () {
                appThis.hasSuccess = false;
            },
            /*
            * 锁定点击--防止重复点击
            * */
            onlockClick (type) {
                if (this.clickIden[type]) {
                    return false;
                }
                this.clickIden[type] = true;
                return true;
            },
            /*
             * 解除点击
             * */
            onunlockClick (type) {
                this.clickIden[type] = false;
                return false;
            }
        }
	});
};
