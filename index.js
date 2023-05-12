// let name = 'Nagarajan'
// document.getElementById('heading').innerHTML = `<h1>Welcome ${name}</h1>`
// let element = document.getElementsByTagName('div')
// element[0].setAttribute('class','pinkcolor');
// element[0].style.color="pink"
// let classelements = document.getElementsByClassName('pinkcolor')
// for(let i=0;i<classelements.length;i++)
// {
//     classelements[i].style.color = "pink";
//     classelements[i].style.fontFamily = "Verdana"
//     classelements[i].style.fontSize = "30px"
//     classelements[i].style.textAlign = "center"
// }


// let para = document.createElement('p')
// para.innerHTML = 'The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.' 
// document.getElementById('heading').appendChild(para)
// document.getElementById('heading').append('My name is Billa')
// // document.getElementById('heading').innerHTML = 'My name is Billa'
// // document.body.append(para)


// let fav = ["Tea","Coffee","Mountain Dew","Coke","Pepsi","Bovonto","Tendercoconut"]
// let h2 = document.createElement('h2')//<h2></h2>
// h2.append("My Favourite drinks are")//<h2>My Favourite drinks are</h2>
// document.body.appendChild(h2)// appends the h2 tag to my body

// let ul = document.createElement('ul')

// for(let i=0;i<fav.length;i++)
// {
//     let li = document.createElement('li')
//     li.append(`${fav[i]}`)
//     ul.appendChild(li)
// }   

// document.body.appendChild(ul)

// let input = document.createElement('input')
// input.setAttribute('type','text')
// input.setAttribute('placeholder','Password')
// input.setAttribute('value','Admin@123')
// document.body.append(input)


// let elements = document.querySelectorAll('.pinkcolor')
// console.log(elements)

{/* <ul>
    <li></li>
    <li></li>
    <li></li>
</ul> */}


//Query Selector
// .class
// #id
// p,h1
// div>p

//--------------------------------------------------------Day 2 ----------------------------------------------------------------------

let value = 0

let h1 = document.createElement('h1')
h1.innerHTML='Counter'
h1.style.textAlign = 'center'
document.body.appendChild(h1)

let div = document.createElement('div')
div.setAttribute('id','wrapper')
document.body.appendChild(div)

let button1 = document.createElement('button')
button1.innerHTML='-'
button1.addEventListener('click',decrement)
document.getElementById('wrapper').appendChild(button1)

let p = document.createElement('p')
p.setAttribute('id','value')
p.innerHTML= value
document.getElementById('wrapper').appendChild(p)

let button2 = document.createElement('button')
button2.innerHTML='+'
button2.addEventListener('click',incremenent)
document.getElementById('wrapper').appendChild(button2)

function incremenent()
{
    document.getElementById('value').innerHTML = ++value
}
function decrement()
{
    document.getElementById('value').innerHTML=  --value
}

// setInterval(()=>{
//     incremenent()
// },1000)\

// let input = document.createElement('input')
// input.setAttribute('type','text')
// input.setAttribute('placeholder','Enter Name')
// input.addEventListener('change',(e)=>{
//     console.log(e.target.value)
// })

// document.body.appendChild(input)

let input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('placeholder','Enter Name')
input.addEventListener('keyup',(e)=>{
    console.log(e.target.value.toUpperCase())
})

document.body.appendChild(input)

//PRE - Update first and then Use
//Post - Use First and then Update