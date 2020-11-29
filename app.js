import {array} from './wordsarray.js'

var input=document.querySelector('.input')
input.addEventListener('keydown',e=>{
    if(e.keyCode===13){
        addtoprogressbar()
    }
})
function addtoprogressbar (){
    var html=`<p class="progress"><span>${input.value}</span><i class="far fa-times-circle"></i></p>`
    document.querySelector('.progressbar').insertAdjacentHTML('afterbegin',html)
    input.value=''
}

var container= document.querySelector('.container')
container.addEventListener('click',e=>{
  if(e.target.className==="far fa-times-circle"){
    e.target.closest('p').remove()
  }
  if(e.target.id==='button-left'){
console.log(e.target.closest('ul'));
    // if (e.target.children.style.display === "block") {
    //     e.target.children.style.display = "none";
    //   } else {
    //     e.target.children.style.display = "block";
    //   }
}
    })