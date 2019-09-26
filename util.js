//剪切板功能
export function setClip(data){
    let clipBoard=document.createElement('input');
    clipBoard.style.position='fixed'
    clipBoard.style.bottom='-100px';
    clipBoard.style.left='-100px'
    clipBoard.setAttribute('readonly','readonly')
    clipBoard.value=data
    document.body.appendChild(clipBoard)
     clipBoard.select();
    clipBoard.setSelectionRange(0, clipBoard.value.length)
    document.execCommand('Copy');
    console.log('copy success!')
    document.body.removeChild(clipBoard)
}
//压缩图片,onload方法异步，使用promise解决
export function resize(file){
    return new Promise(resolve=>{
        let img=new Image();
        let getUrl=function(blob){
           return window[window.webkitURL ? 'webkitURL' : 'URL']['createObjectURL'](blob);
        }
         img.src=getUrl(file);
         img.onload=function(){
             var canvas=document.createElement("canvas");
             canvas.width=img.width*0.6;
             canvas.height=img.height*0.6;
             let ctx=canvas.getContext("2d");
             ctx.clearRect(0,0,canvas.width,canvas.height)
             ctx.fillStyle = '#fff';
             ctx.fillRect(0, 0, canvas.width, canvas.height);
             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
             let resizeImg = new Image()
             resizeImg.src = canvas.toDataURL("image/jpeg",0.6); 
             resolve(dataURLtoBlob(resizeImg.src));
           }
    })

}
//调起qq方法
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
//url参数获取
export function queryString(name){
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
}

function dataURLtoBlob(dataurl){
    var arr = dataurl.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}
