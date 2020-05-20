/**
 * H5页面调起qq方法
 */
export function openQq(){
    let ua = navigator.userAgent.toLowerCase(),
        wechat = (/micromessenger/).test(ua);
        if(wechat) return;
        var goDownload = function(){
            alert('未检测到qq应用')
		};
    let scheme='mqqwpa://im/chat?chat_type=wpa&uin=要打开的QQ号码&version=1&src_type=web&web_src='
    if(ua.indexOf('iphone')>-1){
        window.location = scheme;
    } else {
        let t1=Date.now()
        let proxy_frame = document.createElement("iframe");
        proxy_frame.src = scheme;
        document.body.appendChild(proxy_frame);
        setTimeout(function () { 
                    var t2 = Date.now(); 
                        if (!t1 || t2 - t1 < 700) { 
                        document.body.removeChild(proxy_frame);
                        goDownload();
                        } 
            }, 600); 
    }
    
}
