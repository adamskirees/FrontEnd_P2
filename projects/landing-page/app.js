/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 */
/**
 * Define Global Variables
 * ---We need to track the active section. 
 * ---WE need to track the active nav section as well
 * ---We need to track where we are on the screen (which section is showing)
 * ---We need to make an array of the sections
 * ---Then put this array into the nav with an inner HTML (or similar)
*/
// 
const NavBar = document.getElementById("navbar__list");
let sectionList = document.querySelectorAll("section");

//GET A NODE LIST OF THE SECTIONS
function getSectionId(section) {
    return section.id;
}
//GET THE ACTUAL TITLE OF THE SECTION
let title = document.querySelector("section").innerText;
   




    //add LI items to the navbar__list parent ADD LI ITEMS TO THE NAVBAR__LIST PARENT

//SET UP A LOOP, THEN FOR EACH

for (section of sectionList) {
    //CREATE THE LI ELEMENT FOR NAV FOR RE-USE, INCLUDING THE CLASS LISTS
    const listElement = document.createElement("li");
    //CREATE THE ANCHOR AND THEN APPEND IN A LINK
    const HREF = document.createElement('a');
    //const sectionId = getSectionId(sectionList);
    HREF.setAttribute("href", "#", section.id);
    listElement.appendChild(HREF);
    let title = document.querySelector("h2").innerText;
    HREF.innerText = title;
    //Append the above to the Navigation list
    NavBar.appendChild(listElement);
}



 // CREATE THE LI ELEMENT
 // CREATE ANY OTHER HTML ELEMENTS
 // APPEND IN ANY CLASS NAMES TO THE LI
 // APPEND IN THE INNER HTML TO THE LI (AND HREF REQUIRED)
 //FINALLY APPEND THE NEWLY CREATED LI ELEMENT + INFO TO THE NAVBAR_LIST