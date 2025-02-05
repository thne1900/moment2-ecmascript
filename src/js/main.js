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
   
const tbodyEl=document.getElementById("table");
courses.forEach(course=>{

    tbodyEl.innerHTML+=`<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`;
    
    data.sort((a, b)=> a.code > b.code ? 1:-1);
    data.sort((a, b)=> a.coursename > b.coursename ? 1:-1);
    data.sort((a, b)=> a.progression > b.progression ? 1:-1);

}
)}



