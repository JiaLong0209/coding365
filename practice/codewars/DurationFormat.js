function formatDuration (seconds) {
    let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
    let res = [];
    if (seconds === 0) return 'now';
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(`${val} ${key}${val>1?'s':''}`);
        seconds = seconds % time[key];
      }
    }
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }



// my solution
function formatDuration_my (seconds) {
    console.log(seconds);
    if(seconds == 0) return 'now';
    let year = 0;
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let str = '';
    
    if(seconds / 60 >= 1){
      minute = Math.floor(seconds / 60);
      second = seconds % 60;
    }
    if(minute / 60 >= 1){
      hour = Math.floor(minute / 60);
      minute = minute % 60;
    }
    if(hour / 24 >= 1){
      day = Math.floor(hour / 24);
      hour = hour % 24;
    }
    if(day / 365 >= 1){
      year = Math.floor(day / 365);
      day = day % 365;
    }
    second = seconds % 60;
    if(year){
      str += `${year} ${year>1?'years':'year'}, `;
    }
    if(day){
      str += `${day} ${day>1?'days':'day'}${hour>0? ', ' :minute>0? second>0?', ': ' and ': ''}`;
    }
    if(hour){
      str += `${hour} ${hour>1?'hours':'hour'}${minute>0?second>0?', ':' and ': second>0? ' and ': '' }`;
    }
    if(minute){
      str += `${minute} ${minute>1?'minutes':'minute'}${second>0?' and ':''}`;
    }
    if(second){
      str += `${second} ${second>1?'seconds':'second'}`;
    }
    return str;
  }