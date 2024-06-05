const myform= document.querySelector("form")
    console.log(myform)
const arr =[]
    myform.addEventListener('submit',myfun)

function myfun(event){ 
    event.preventDefault()

let Name=document.getElementById("name").value
let Id=document.getElementById("em").value
let Select=document.getElementById("select").value
let ex=document.getElementById("ex").value
let Email=document.getElementById("em").value
let number=document.getElementById("mo").value

let data = {
    Ename: Name,
    Eid : Id,
    Edepartment:Select,
    Eexperience:ex,
    Eemail: Email,
   ENumber : number
}
// console.log(data)
arr.push(data)
console.log(arr)

display(arr);

}
function display(arr){
    document.querySelector("tbody").innerHTML=" ",
    arr.forEach(function(data){

        let tr=document.createElement('tr');

       let name=document.createElement('td');
       name.innerText=data.Ename 

    let id=document.createElement('td');
    id.innerText=data.Eid

let Edepartment=document.createElement('td');
Edepartment.innerText=data.Edepartment

let ex=document.createElement('td');
ex.innerText=data.Eexperience

let em=document.createElement('td');
em.innerText=data.Eemail

let num=document.createElement('td');
num.innerText=data.ENumber



let role=document.createElement('td');

let roletext=giverole(data.Eexperience)
role.innerText=roletext

let Delete=document.createElement('td')
Delete.innerText="Delete"
Delete.style.backgroundColor="red"
Delete.style.cursor="pointer"
Delete.addEventListener('click',function(event){
    event.target.parentNode.remove()
})

tr.append(name,id,Edepartment,ex,em,num,role,Delete);
document.querySelector("tbody").append(tr);



    })
        
}

function giverole(Eexperience){
    if(Eexperience>5){
        return "senior"
    }
    else if(Eexperience>=2 && Eexperience<=5){
   return "junior"
    }
    else if(Eexperience<=1){
  return "fresher"}
    
   

}

    