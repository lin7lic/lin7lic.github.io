printTimeZone();
setInterval(printTimeZone, 1000);

function printTimeZone(){
    var today=new Date();
    var currentDateTime =today.getFullYear()+'/'
    if ((today.getMonth()+1)<10){
      currentDateTime+='0'+(today.getMonth()+1);
    }else{
      currentDateTime+=(today.getMonth()+1);
    }
    if (today.getDate()<10){
      currentDateTime+='/'+'0'+today.getDate();
    }else{
      currentDateTime+='/'+today.getDate();
    }
    if (today.getHours()<10){
      currentDateTime+=' '+'0'+today.getHours();
    }else{
      currentDateTime+=' '+today.getHours();
    }
    if (today.getMinutes()<10){
      currentDateTime+=':'+'0'+today.getMinutes();
    }else{
      currentDateTime+=':'+today.getMinutes();
    }
    if (today.getSeconds()<10){
      currentDateTime+=':'+'0'+today.getSeconds();
    }else{
      currentDateTime+=':'+today.getSeconds();
    }
  const el = document.querySelector('.timeList');
  var timestamp = Math.floor(Date.now() / 1000);
  let htmlStr = '';

  htmlStr = htmlStr + `${currentDateTime}`
  el.innerHTML = htmlStr;

  const el2 = document.querySelector('.timestamp');
  htmlStr = '';
  htmlStr = htmlStr + `${timestamp}`
  el2.innerHTML = htmlStr;
}