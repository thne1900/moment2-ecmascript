"use strict";

let courses=[];

window.onload=()=>{
    loadCourses();

document.getElementById("code").addEventListener("click", sortCode);
document.getElementById("name").addEventListener("click", sortName);
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

function displayCourses(){
   
const tbodyEl=document.getElementById("table");
tbodyEl.innerHTML="";

courses.forEach(course=>{
    tbodyEl.innerHTML+=`<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`;
    
}
)}

function sortCode() {

    const sortedCode=courses.code;

        courses.sort((a, b)=> a.code > b.code ? 1:-1);
    
    displayCourses(sortedCode);
}
function sortName() {

    const sortedName=courses.coursename;

        courses.sort((a, b)=> a.coursename > b.coursename ? 1:-1);
    
    displayCourses(sortedName);
}



