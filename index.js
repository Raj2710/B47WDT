// function heading(){
//     let h1 = document.createElement('h1')
//     h1.innerHTML = "I am a callback for display"
//     document.body.appendChild(h1)
// }

// function display(sum,callback){
//     let h1 = document.createElement('h1')
//     h1.innerHTML = sum
//     document.body.appendChild(h1)
//     callback()
// }

// function add(a,b,callback)
// {
//     let sum = a+b
//     callback(sum,heading)
// }

// let x = 5
// let y = 10

// add(x,y,display)


// let inputNumbers = [10,20,-10,-5,6,7,-3]

// let positiveNumbers = removeNegativeNumbers(inputNumbers, (x)=> x>0)

// document.body.innerHTML = `<h1>${positiveNumbers}</h1>`

// function removeNegativeNumbers(numbers,callback){
//     let myArray = []
//     for(let i =0;i<numbers.length;i++)
//     {
//         if(callback(numbers[i]))
//             myArray.push(numbers[i])
//     }

//     return myArray;
// }


// let positiveNumbers = inputNumbers.filter((x)=>x>0)
// document.body.innerHTML = `<h1>${positiveNumbers}</h1>`


//Call Back Hell

setTimeout(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                setTimeout(()=>{
                    setTimeout(() => {
                        let h1 = document.createElement('h1')
                        h1.innerHTML = "I am callback 6"
                        document.body.appendChild(h1)
                    }, 1000);
                    let h1 = document.createElement('h1')
                    h1.innerHTML = "I am callback 5"
                    document.body.appendChild(h1)
                },1000)
                let h1 = document.createElement('h1')
                h1.innerHTML = "I am callback 4"
                document.body.appendChild(h1)
            },1000)

            let h1 = document.createElement('h1')
            h1.innerHTML = "I am callback 3"
            document.body.appendChild(h1)
        },1000)

        let h1 = document.createElement('h1')
        h1.innerHTML = "I am callback 2"
        document.body.appendChild(h1)
    },1000)

    let h1 = document.createElement('h1')
    h1.innerHTML = "I am callback 1"
    document.body.appendChild(h1)
},1000)