// signup
const myform=document.getElementById('signupform')
    // console.log(myform) 
    myform.addEventListener('submit',sdata)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
function sdata(event){
    
    let name=document.getElementById('sname').value
let pass=document.getElementById('spass').value
let cpass=document.getElementById('cpass').value

const obj={
    Name:name,
    Pass:pass,
    Cpass:cpass  
}
// console.log(obj)
const data =localStorage.setItem('formdata',JSON.stringify(obj))

if(pass===cpass){
    alert('password is confirmed')
}
else{
    alert('wrong password')
}
}

// login
function loginform(){
    const parse=JSON.parse(localStorage.getItem('formdata'))
     let name=document.getElementById('lname').value
     let pass=document.getElementById('lpassword').value

     if(parse.Name==name && parse.Pass==pass){
        alert("login successful")
     }

     else{
        alert(' login failed')
     }
}



