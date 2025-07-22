var Bookmarkinput =document.getElementById("Bookmark")
var urlinput =document.getElementById("urlsite")
var bookcontainer=document.getElementById("bookcontainer")
var book=[]
var Submit=document.getElementById("Submit")
 book = JSON.parse(localStorage.getItem("book"))||[]
display()
 // addbook
function addbook(){
    var regex=/^(https|http):\/\/(www\.)?[A-Za-z]{2,}\.(com)$/
if(!(Bookmarkinput.value.length>3)||!(regex.test(urlinput.value))){
console.log("in-valid");
return
}else{
 
}

var Book={
    name:Bookmarkinput.value,
    link:urlinput.value
}    
console.log(Book);
book.push(Book)
localStorage.setItem("book",JSON.stringify(book))
clearinputs()
display()
   Submit.setAttribute("data-bs-toggle","modal")
    Submit.setAttribute("data-bs-target","#exampleModal")

}
 // clear input  
 function clearinputs(){
   Bookmarkinput.value=""
            urlinput.value=""
 }
// displayresult
function display(){
bookcontainer.innerHTML=""
for(var i=0;i<book.length;i++){
bookcontainer.innerHTML+=  ` <tr>
          <td>${i+1}</td>
          <td>${book[i].name}</td>
          <td><a href=${book[i].link} class="btn btn-success btn-lg">visit</a></td>
          <td><button class="btn btn-danger btn-lg" onclick="deletebook(${i})">Delete</button></td>
        </tr>`
}
}
// delete
function deletebook(index){
book.splice(index,1)
localStorage.setItem("book",JSON.stringify(book))
display()
}

// validation
function validationname(){
var regex=/^(https|http):\/\/(www\.)?[A-Za-z]{2,}\.(com)$/

    if(Bookmarkinput.value.length>3){
    console.log(Bookmarkinput.value);
        console.log(Bookmarkinput.classList.remove("is-invalid"));
        if(regex.test(urlinput.value)){
       Submit.removeAttribute("data-bs-toggle")
    Submit.removeAttribute("data-bs-target")
}else{
       Submit.setAttribute("data-bs-toggle","modal")
    Submit.setAttribute("data-bs-target","#exampleModal")
}
    }else{
        console.log(Bookmarkinput.classList.add("is-invalid"));    
           Submit.setAttribute("data-bs-toggle","modal")
    Submit.setAttribute("data-bs-target","#exampleModal")    
    }
}
function validationlink(){
var regex=/^(https|http):\/\/(www\.)?[A-Za-z]{2,}\.(com)$/
console.log(regex.test(urlinput.value));

if(regex.test(urlinput.value)){
        console.log(urlinput.classList.remove("is-invalid"));
if(Bookmarkinput.value.length>=3){
       Submit.removeAttribute("data-bs-toggle")
    Submit.removeAttribute("data-bs-target")
}else{
       Submit.setAttribute("data-bs-toggle","modal")
    Submit.setAttribute("data-bs-target","#exampleModal")
}
}else{
        console.log(urlinput.classList.add("is-invalid"));        
   Submit.setAttribute("data-bs-toggle","modal")
    Submit.setAttribute("data-bs-target","#exampleModal")
}
}