import Vue from 'vue'

export default {
	install(Vue, options) {
		//接口地址
		// Vue.prototype.api = "http://www.ischoolhn.com";	//测试环境
        //内网环境
        Vue.prototype.api = "http://220.174.232.142:9016";	//测试环境

		// Vue.prototype.api = "http://www.ischoolhn.com";	//试运行环境
		// Vue.prototype.api = "http://10.10.43.28:9013";	//卫俊

		//Vue.prototype.api = "http://www.hn-ssc.com";	//正式环境
        // Vue.prototype.api = "";	//打包环境

		//通用错误处理
		Vue.prototype.getError = function(data) {
			console.log(data);
			if(data.code == 1000) {
				store.commit(types.LOGOUT);
			} else {
				alert(data.msg);
			}
		};


	},
}

//过滤器
Vue.filter('formatDate', function(time, dateType) {
	// 返回处理后的值
    if(time){
        time = time.replace(/-/g,"/");
    }else {
    	return;
	}
	var date = new Date(time);
	if(dateType == null) {
		return formatDate(date, 'yyyy-MM-dd');
	} else {
		return formatDate(date, dateType);
	}

})




export function formatDate(date, fmt) {//2018-03-21 18:08:48
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for(let k in o) {
		if(new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};

function padLeftZero(str) {
	return('00' + str).substr(str.length);
};

//    封装禁止页面滚动方法（该方法兼容PC端和移动端）
export function stopBodyScroll (isFixed,top) {
    var bodyEl = document.body
    if (isFixed) {
        bodyEl.style.position = 'fixed'
        bodyEl.style.top = -top + 'px'
    } else {
        bodyEl.style.position = ''
        bodyEl.style.top = ''
        window.scrollTo(0, top) // 回到原先的top
        window.scrollTo(0, top) // 回到原先的top
    }
}




