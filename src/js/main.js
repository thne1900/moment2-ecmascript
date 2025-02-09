"use strict";

let courses=[];

window.onload=()=>{
    loadCourses();

document.getElementById("code").addEventListener("click", sortCode);
document.getElementById("name").addEventListener("click", sortName);
document.getElementById("prog").addEventListener("click", sortProg);
document.getElementById("filter").addEventListener("input", filterCourses);
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

function displayCourses(courses){
   
const tbodyEl=document.getElementById("table");
tbodyEl.innerHTML="";

courses.forEach((course)=>{
    tbodyEl.innerHTML+=`<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`;
    
});
}
function sortCode() {
        courses.sort((a, b)=> a.code > b.code ? 1:-1);

    displayCourses(courses); 
}
     
function sortName() {
        courses.sort((a, b)=> a.coursename > b.coursename ? 1:-1);

    displayCourses(courses);
}

function sortProg() {
        courses.sort((a, b)=> a.progression > b.progression ? 1:-1);
    
    displayCourses(courses);
}

function filterCourses() {
    const filterText=document.getElementById("filter").value;

const coursesFiltered=courses.filter((course)=>
    course.coursename.toLowerCase().includes(filterText.toLowerCase())
);
displayCourses(coursesFiltered);
}


