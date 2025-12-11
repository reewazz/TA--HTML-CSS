//  console.log(document.body)

// console.log(hello);
// hello?.classList.add('rounded')
// hello?.classList.remove('box')
// hello.style.backgroundColor= "teal"

const box = document.getElementsByClassName('box')
box[1].style.backgroundColor = "black"

// const tag1 = document.getElementsByTagName('span')
// tag1[0].innerText="<h2>Inner html</h2>"


const clickfunction = ()=> {
  alert('heloo from box 1')
}
function mouseoverfunction () {
    console.log('mouse is over');
}

function keydown(){
    console.log('key is pressed',)
}

const fruits = ['apple','ball','cat'];


 const result = fruits.forEach((item,index)=>{
    console.log(item,index);

})
console.log(result);

const hello = document.getElementById('box-2')
hello?.addEventListener('mouseover',(e)=>{
    console.log("aba chai vayo",e)
})


const forminput = document.getElementById('input')
forminput?.addEventListener('keydown',(e)=>{
    console.log("inside input",e.key)
})