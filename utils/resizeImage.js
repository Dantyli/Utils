/**
 * 基于canvas压缩图片,onload方法异步，使用promise解决
 */
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