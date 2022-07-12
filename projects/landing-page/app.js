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
 *We need to track the active section first, and then subsequently the active nave. 
 * Will also need to make an array of the sections, converting these into Nav ul/li 
*/

// MY CODE BEGIN, VARIABLES 
const NavBar = document.getElementById('navbar__list');
let sectionList = document.querySelectorAll('section');


//GET A NODE LIST OF THE SECTIONS
function getSectionId(section) {
    return section.id;
}

/**add LI items to the navbar__list parent ADD LI ITEMS TO THE NAVBAR__LIST PARENT
// IDENTIFY THE ACTIVE SECTION OF THE PAGE, SO THE ACTIVE SECTION IS UPDATED 
*  AND UPDATES THE LI AS WELL. HAVE REFERED TO UDACITY MENTOR ANSWER FOR THIS
// ...https://knowledge.udacity.com/questions/85408*****
*/
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document. documentElement.clientWidth)
        );
      }
                            
//SET UP A LOOP, THEN BUILD THE NEW LI FOR EACH SECTION
for (section of sectionList) {
    //CREATE THE LI ELEMENT FOR NAV FOR RE-USE, INCLUDING THE CLASS LISTS
    const listElement = document.createElement('li');
    //CREATE THE ANCHOR AND THEN APPEND IN A LINK
    const HREF = document.createElement('a');
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

//CALL THE FUNCTION ABOVE UPON SCROLL, USING THE sectionList 
//THIS POST WAS READ SEVERAL TIMES TO 
//ASSIST https://knowledge.udacity.com/questions/66312#66326
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
// Get a nav list of items
let navsList = document.querySelectorAll("ul .menu__link");

window.document.addEventListener("scroll", () => {
        let sectionId = "";
        sectionList.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                sectionId = section.id;
            }    
    });
           
//loop to update the Nav highlighting 
    navsList.forEach((li) => {
    if (li.classList.contains(sectionId)) {
        li.classList.add("your-active-class");
    } else {
        li.classList.remove("your-active-class");
    }
    });
});


// IMPLIMENT A SMOOTH SCROLL FROM THE CLICK OF THE MENU LI (click event)
// StackOverflow post was most helpful...https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});


//USE SETTIMEOUT TO HIDE THE NAVIGATION WHEN NOT SCROLLING
const task = function() {   
    let navchk = document.querySelector('nav');
    if(window.getComputedStyle(navchk).display == "block") {
        document.querySelector('nav').style.display = "none";
        //window.clearTimeout();
        }
         else {
           document.querySelector('nav').style.display = "block";
        }
    };  
    window.document.addEventListener("scroll", () => {
        setTimeout(task, 5000)
        });

     
    
 



