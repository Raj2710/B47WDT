// document.body.innerHTML="<h1>Welcome to Promise</h1>"


//Asynchronous Programing
// setTimeout(()=>{
//     console.log("Set Timeout 1")
// },3000)

// setTimeout(()=>{
//     console.log("Set Timeout 2")
// },3000)

// setTimeout(()=>{
//     console.log("Set Timeout 3")
// },3000)

// setTimeout(()=>{
//     console.log("Set Timeout 4")
// },3000)


// //synchronous Programing
// function add(a,b)
// {
//     return a+b
// }

// console.log(add(10,5))


// function longFun(){
//     for(var i=0;i<10000000000;i++)
//     {}
//     return i
// }

// function add()
// {
//     return 5+10
// }

// setTimeout(()=>{
//     for(var i=0;i<10000000000;i++)
//     {}
//     console.log(i)
// },1500)

// setTimeout(()=>{
//     console.log("Welcome")
// },1000)


// console.log(longFun(),add())



// let myPromise = new Promise((resolve,reject)=>{
//     let x = 10
//     if(x>9)
//         resolve(x)
//     else
//         reject("Received a smallest number")
// })

// myPromise.then(
//     (value)=>{
//         alert(value)
//     },
//     (error)=>{
//         alert(error)
//     }
//     )

// let createElement = new Promise((resolve,reject)=>{
//     for(var i=0;i<10000000000;i++)
//     {}
//     resolve("I am done")
// })


// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I am a delayed output")
//     },3000)
// })

// let h1 = document.createElement('h1')
// h1.setAttribute('id','head')
// document.body.appendChild(h1)

// myPromise.then(
//     (value)=>{
//         document.getElementById('head').innerHTML = value
//     }
// )

// createElement.then(
//     (value)=>{
//         let h2 = document.createElement('h2')
//         h2.setAttribute('id','smallhead')
//         h2.innerHTML = value
//         document.body.appendChild(h2)
//     }
// )
// let x = 5;
// let h1 = document.createElement("h1")
// h1.innerHTML = x
// h1.setAttribute('id','value')
// document.body.appendChild(h1)


// let promise_5 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Happy Independence Day")
//         // reject("Invalid Session")
//     },5000)
// })

// let promise_4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         x--
//         resolve(x)
//     },4000)
// })

// let promise_3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         x--
//         resolve(x)
//         // reject("Invalid Session")
//     },3000)
// })

// let promise_2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         x--
//         resolve(x)
//     },2000)
// })

// let promise_1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         x--
//         resolve(x)
//         // reject("Invalid Session")
//     },1000)
// })


// promise_1.then(
//     (value)=>{
//         document.getElementById("value").innerHTML=value;
//         promise_2.then(
//             (value)=>{
//                 document.getElementById("value").innerHTML=value;
//                 promise_3.then(
//                     value=>{
//                         document.getElementById("value").innerHTML=value;
//                         promise_4.then(
//                             value=>{
//                                 document.getElementById("value").innerHTML=value;
//                                 promise_5.then(
//                                     value=>{
//                                         document.getElementById("value").innerHTML = value
//                                     },
//                                     error =>{
//                                         alert(error)
//                                     }
//                                 )
//                             },
//                             error =>{
//                                 alert(error)
//                             }
//                         )
//                     },
//                     error =>{
//                         alert(error)
//                     }
//                 )
//             },
//             error =>{
//                 alert(error)
//             }
//         )
//     },
//     error =>{
//         alert(error)
//     }
// )


//Promise.all()

// let promise_1 = new Promise((resolve,reject)=>{
//     console.log("p1")
//     resolve("Welcome")
// })

// let promise_2 = new Promise((resolve,reject)=>{
//     console.log("p2")
//     reject("Greetings")
// })

// let promise_3 = new Promise((resolve,reject)=>{
//     console.log("p3")
//     resolve("Invite")
// })

// Promise.all([promise_1,promise_2,promise_3]).then(
//     values=>{
//     console.log(values)
// },
// error=>{
//     console.log(error)
// }
// )