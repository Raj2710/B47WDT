let H = 0;
let M = 0;
let S = 0;
let MS = 0

let myInterval;

let padNumber = (num)=>{
    return String(num).padStart(2,'0')
}

let title = document.createElement('h1')
title.innerHTML = "Stopwatch"
title.style.textAlign="center"
document.getElementById('root').appendChild(title)

let watch = document.createElement('h1')
watch.innerHTML = `${padNumber(H)}<sub>H</sub> : ${padNumber(M)}<sub>M</sub> : ${padNumber(S)}<sub>S</sub>  <sub>${padNumber(MS)}</sub>`
watch.style.textAlign="center"
document.getElementById('root').appendChild(watch)

let btn_wrapper = document.createElement('div')
btn_wrapper.style.textAlign="center"
document.getElementById('root').appendChild(btn_wrapper)

let st_btn = document.createElement('button')
st_btn.innerHTML = "Start"
st_btn.setAttribute('class','btn')
st_btn.addEventListener('click',()=>{
    if(st_btn.innerHTML === "Start")
    {
        st_btn.innerHTML = "Stop"
        start()
    }
    else
    {
        st_btn.innerHTML = "Start"
        stop()
    }
})
btn_wrapper.appendChild(st_btn)

let reset_btn = document.createElement('button')
reset_btn.innerHTML = "Reset"
reset_btn.setAttribute('class','btn')
reset_btn.addEventListener('click',()=>{
    stop()
    st_btn.innerHTML = "Start"
    H=0;M=0;S=0;MS=0;
    watch.innerHTML = `${padNumber(H)}<sub>H</sub> : ${padNumber(M)}<sub>M</sub> : ${padNumber(S)}<sub>S</sub>  <sub>${padNumber(MS)}</sub>`
})
btn_wrapper.appendChild(reset_btn)

function start()
{
    myInterval = setInterval(()=>{
        ++MS
        if(MS===100){
            ++S
            MS=0
        }
            
        if(S===60){
            ++M
            S=0
        }
            
        if(M===60){
            ++H
            M=0
        }
            
        watch.innerHTML = `${padNumber(H)}<sub>H</sub> : ${padNumber(M)}<sub>M</sub> : ${padNumber(S)}<sub>S</sub>  <sub>${padNumber(MS)}</sub>`
    },10)
}

function stop(){
    clearInterval(myInterval)
}
