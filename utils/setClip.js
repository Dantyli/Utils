/**
 * 复制内容到剪切板功能
 * 可兼容Android和iso系统
 */
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
    document.body.removeChild(clipBoard)
}