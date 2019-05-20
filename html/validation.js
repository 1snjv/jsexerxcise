let myvalidation=function() {
    let myvalue = document.getElementById('myform').value
    if(isNaN(myvalue)||myvalue<1 || myvalue>20)
    {
        console.log('incorrect input')
    }
    else{
        console.log('correct input')
    }
}

let myp = document.getElementById('one')
myp.textContent='a new text'

//form data handle

let myelem = document.querySelector(".myform").addEventListener('submit',(element)=>{
    console.log(element.target.uname.value)
    console.log(element.target.email.value)
    element.preventDefault()
    element.target.uname.value=''
    element.target.email.value=''
})
