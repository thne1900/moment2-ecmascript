"use strict";

let courses=[];
window.onload=()=>{
    loadCourses();

}
async function loadCourses() {
    try {
        const response=await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json");
        if(!response.ok){
            throw new Error("Fel vid datainhämtningen");
        }
        courses=await response.json();
        displayCourses(courses)
        
    } catch (error) {
        console.error(error);
       document.querySelector("#fail").innerHTML="<p>Tyvärr kan inte innehållet visas för tillfället.</p>"; 
    }
}

function displayCourses(data){
   
const codeElement=document.getElementById("code");
courses.forEach(courses=>{
    const row=document.createElement("tr");
    const codeRow=document.createElement("td");
    codeRow.innerHTML+=courses.code;

    row.appendChild(codeRow);
    codeElement.appendChild(row);
    
    data.sort((a, b)=> a.code > b.code ? 1:-1);
    
})
    const nameElement=document.getElementById("name");
    courses.forEach(courses=>{
        const row=document.createElement("tr");
        const nameRow=document.createElement("td");
        nameRow.innerHTML+=courses.coursename;
    
        row.appendChild(nameRow);
        nameElement.appendChild(row);
        
        data.sort((a, b)=> a.coursename > b.coursename ? 1:-1);

})
const progElement=document.getElementById("prog");
courses.forEach(courses=>{
    const row=document.createElement("tr");
    const progRow=document.createElement("td");
    progRow.innerHTML+=courses.progression;

    row.appendChild(progRow);
    progElement.appendChild(row);

    data.sort((a, b)=> a.progression > b.progression ? 1:-1);

})
}





