document.addEventListener('DOMContentLoaded',()=>{
    console.log('hello')
    // document.querySelector('#second').addEventListener('click',()=>{
    //     console.log('inside')
    // })
    let minute=document.getElementById('minute')
    let second=document.getElementById('second')
    let hour=document.getElementById('hour')
    var now=new Date()
    console.log("now: "+now)
    let numHours=now.getHours()
   let newDegHour=0
   let degHour=30
   let degMinute=6
   let degSecond=6
    let numberSecond=now.getSeconds()
    if(numHours>12){
         newDegHour=30*(numHours-12)
    }else{
            newDegHour=degHour*numHours
    }
    let newDegMinute=degMinute*now.getMinutes()
    let newDeSecond=degSecond*now.getSeconds()
    const changePosition=()=>{
        minute.style.transform='rotate('+newDegMinute+'deg)'
        second.style.transform='rotate('+newDeSecond+'deg)'
        hour.style.transform='rotate('+newDegHour+'deg)'
        newDeSecond+=6
        newDegMinute+=6/60
        newDegHour+=30/3600
        // console.log('minute'+newDegMinute)
        // console.log('hour:'+newDegHour)
        // console.log('second:'+newDeSecond)
    }
    const changeFirstPosition=()=>{
        console.log("here is change firstposition")
        let newSecond=(60-(60-numberSecond))
        console.log("newsecond"+newSecond)
        console.log("firstnewDegMinue"+newDegMinute)
        newDegMinute+=(6/360)*newSecond
        console.log("newDegMinue"+newDegMinute)
        newDegHour+=(30/3600)*newSecond
        console.log('firstminute'+newDegMinute)
        console.log('firsthour:'+newDegHour) 
        minute.style.transform='rotate('+newDegMinute+'deg)'
        hour.style.transform='rotate('+newDegHour+'deg)'
        if(now.getHours()==0){
            updateDate() 
        }
    }
    const updateDate=()=>{
        let myDiv=document.getElementById('update')
        let mytext=document.createElement('h3')
        mytext.innerText=`${now.getMonth()+1}/ ${now.getDate()} / ${now.getFullYear()}`
        console.log("now:" + now)
        myDiv.appendChild(mytext)
    }
    
    updateDate()
    setInterval(changePosition,1000)
    let x=((60-now.getSeconds())*1000)
    setTimeout(changeFirstPosition,x)
   
    function firstPosition(){
        second.style.transform='rotate('+newDeSecond+'deg)'
        hour.style.transform='rotate('+newDegHour+'deg)'
        minute.style.transform='rotate('+newDegMinute+'deg)'
        let x=(60-now.getSeconds())*1000
        setTimeout(changeFirstPosition,x)
        console.log("helooooooooooooooooooo"+(60-numberSecond)*1000)
    }
})


