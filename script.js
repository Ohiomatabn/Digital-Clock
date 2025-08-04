function time (){
  const now = new Date();
  let hours =now.getHours()
  let mins = now.getMinutes()
  let secs = now.getSeconds();
  
  hours < 10 ? hours =`0${hours}` : hours;
  mins < 10 ? mins = `0${muns}` : mins
  secs < 10 ? secs = `0${secs}` : secs
  
  document.getElementById('time').innerHTML = `${hours} : ${mins} : ${secs}`
}

function date(){
  const now = new Date()
  let today = now.getDay();
  let date = now.getDate()
  let month = now.getMonth()
  let year = now.getFullYear();
  
  today === 0 ? today = 'Sunday' : ''
  today === 1 ? today = 'Monday' : ''
  today === 2 ? today = 'Tuesday' : ''
  today === 3 ? today = 'Wednessday' : ''
  today === 4 ? today = 'Thursday' : ''
  today === 5 ? today = 'Friday' : ''
  today === 6 ? today = 'Saturday' : ''
  
  date < 10 ? date = `0${date}` : date
  
  
  month === 0 ? today = 'January' : ''
  month === 1 ? today = 'February' : ''
  month === 2 ? today = 'March' : ''
  month === 4 ? month = 'April' : ''
  month === 3 ? month = 'May' : ''
  month === 5 ? month = 'June' : ''
  month === 6 ? month = 'July' : ''
  month === 7 ? month = 'August' : ''
  month === 8 ? month = 'September' : ''
  month === 9 ? month = 'October' : ''
  month === 10 ? month = 'November' : ''
  month === 11 ? month = 'December' : ''
  
  document.getElementById('date').innerHTML = `${today} ${date} ${month} ${year}`
}

setInterval(()=>{
  date()
  time()
},1000)