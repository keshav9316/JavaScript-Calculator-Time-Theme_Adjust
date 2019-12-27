// Show Time
function showTime() {

    let today = new Date();
    let  hour = today.getHours();
    let  min = today.getMinutes();
    let  sec = today.getSeconds();
  
    // Set AM or PM
    const showAmPm = true;
    const amPm = (hour >= 12 ? 'PM' : 'AM');

    backgroundcolor(amPm);
    
    // 12hr Format
    hour = hour % 12 || 12;
  
    //Output Date
    document.getElementById('date').innerHTML = today.toDateString();
  
    // Output Time
   document.getElementById('time').innerHTML = `${hour}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)} ${showAmPm ? amPm : ''}`;
   setTimeout(showTime, 1000);
  }
  
  function addzero(time){
      let zero = (time < 10 ? '0':'');
     return ( time = zero + time );
  }
    // background color
function backgroundcolor(amPm){
    if(flag==true){
    if(amPm==='PM'){
        document.documentElement.style.setProperty('--back-color', 'linear-gradient(to right, rgb(92, 94, 94), rgb(94, 121, 121))' );
    } else {
        document.documentElement.style.setProperty('--back-color', 'linear-gradient(to right, rgb(39, 121, 228), rgb(167, 203, 236))' );
    }
    }
}

      //function call
  showTime();