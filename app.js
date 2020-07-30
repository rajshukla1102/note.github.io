console.log("welcome")
shownotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addText");
    let addtitle = document.getElementById("addtitle");
    let notes = localStorage.getItem("notes");  //it will search if there is something in notes
    if (notes == null) {
        notesObj = [];  //if null it will show as it is
    }
    else {
        notesObj = JSON.parse(notes);  //it will show if user add some text in text area and will parse it into object

    }
    let objfull={
        title:addtitle.value,
        text:addTxt.value
    }
    notesObj.push(objfull); //value set in notesObj array using push method
    localStorage.setItem("notes", JSON.stringify(notesObj)); //it will show if user add some text in text area and will stringify it into string

    addTxt.value = "";
    addtitle.value="";
     // when value is submitted it will leave text area empty
    // console.log(notesObj);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
    let html = ""; // blank string 
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${ index+1,element.title}</h5>
            <p class="card-text" >${element.text}</p>
           
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`

    });
    let noteElem=document.getElementById('notes');
    if(notesObj.length!=0){
        noteElem.innerHTML=html;
    }
    else{
        noteElem.innerHTML=`Nothing to show`;
        
    }
}



function deletenote(index){
    
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
notesObj.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notesObj));
shownotes();
}  



search=document.getElementById('searchTxt')
search.addEventListener('input',function(){
    inputval=search.value;
    // console.log("eventfound",inputval);
    let noteCard=document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function(element){
        let cardtext=element.getElementsByTagName("p")[0].innerText
        if(cardtext.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
  
})
// 

// console.log(divElem,container)
