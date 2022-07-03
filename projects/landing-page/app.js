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

// MY CODE BEGIN **************************************************************************************** 
const NavBar = document.getElementById('navbar__list');
let sectionList = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll(".navbar__menu a");


//GET A NODE LIST OF THE SECTIONS***********************************************************************
function getSectionId(section) {
    return section.id;
}

    //add LI items to the navbar__list parent ADD LI ITEMS TO THE NAVBAR__LIST PARENT
    // IDENTIFY THE ACTIVE SECTION OF THE PAGE, SO THE ACTIVE SECTION IS UPDATED AND UPDATES THE LI AS WELL
    // HAVE REFERED TO UDACITY MENTOR ANSWER FOR THIS...https://knowledge.udacity.com/questions/85408*****
    // REMAINED WITH THIS METHOD EVEN WITH SMALL SCREEN ISSUES, INSTEAD OF USING INTERSECTION OBSERVER API
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document. documentElement.clientWidth)
        );
      }
                            
//SET UP A LOOP, THEN BUILD THE NEW LI FOR EACH SECTION WE HAVE***************************************
for (section of sectionList) {
    //GET THE ACTUAL TITLE OF THE SECTION
    let title = document.querySelector("h2").innerText;
    //CREATE THE LI ELEMENT FOR NAV FOR RE-USE, INCLUDING THE CLASS LISTS
    const listElement = document.createElement('li');
    //CREATE THE ANCHOR AND THEN APPEND IN A LINK
    const HREF = document.createElement('a');
    //const sectionId = getSectionId(sectionList);
    HREF.setAttribute("href", "#" + section.id);
    listElement.appendChild(HREF);
    //GET THE RIGHT SECTION INTO EACH NAV LINK
    // Simple blog post assistend to assing the classes via javascript, thanks to https://bobbyhadz.com/blog/javascript-create-element-with-class
    HREF.innerText = section.id;
    // ADD SOME APPROPRIATE CLASSES for sytling, see reference below
    HREF.classList.add('menu__link');
    HREF.classList.add(section.id);
   //Append the above to the Navigation list
    NavBar.appendChild(listElement);
        //look for and alter the active class in the navigation
        if (section.classList.contains('your-active-class')) {
            HREF.classList.add('your-active-class');
        }
}

//CALL THE FUNCTION ABOVE UPON SCROLL, USING THE sectionList **************************************
//THIS POST WAS READ SEVERAL TIMES TO ASSIST https://knowledge.udacity.com/questions/66312#66326
window.document.addEventListener(
    "scroll",
    function (event) {
        sectionList.forEach((section) => {
            if (isElementInViewport(section)) {
                section.classList.add("your-active-class");       
            }
            else (section.classList.remove("your-active-class"));
        });
 
    },
    false
);

//AS PER ABOVE WITH ACTIVE SECTOIN, Get a Nav list and then UPDATE THE ACTIVE NAV UPON SCROLL
// GET A LIST OF NAV ITEMS*********************************************************************
let navsList = document.querySelectorAll("ul .menu__link");
//console.log(navsList);

window.document.addEventListener("scroll", () => {
        let sectionId = "";
        sectionList.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                sectionId = section.id;
            }    
    });
           
//loop to update the Nav highlighting ********************************************************
//console.log(sectionId);
navsList.forEach((li) => {
    if (li.classList.contains(sectionId)) {
        li.classList.add("your-active-class");
    } else {
        li.classList.remove("your-active-class");
    }
    });
});


// IMPLIMENT A SMOOTH SCROLL FROM THE CLICK OF THE MENU LI*****************************************
//CLICK EVENT
//navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkclick));
// StackOverflow post was most helpful...https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



 // CREATE THE LI ELEMENT - *** done *** May need to refactor the loop.
 // CREATE ANY OTHER HTML ELEMENTS
 // APPEND IN ANY CLASS NAMES TO THE LI  *** done*** 
 // APPEND IN THE INNER HTML TO THE LI (AND HREF REQUIRED)
 //FINALLY APPEND THE NEWLY CREATED LI ELEMENT + INFO TO THE NAVBAR_LIST