

let menuBtn = document.getElementById('menuBtn');
let menuContainer = document.getElementById('menuContainer');

let menuIconClosed = "menu-icon closed"; //class name for closed button
let menuIconOpened = "menu-icon opened"; //class name for opened button
let menuContClosed = "menu-container closed"; //class name for closed menu
let menuContOpened = "menu-container opened"; //class name for opened menu

menuBtn.onclick = function() {
  if (menuBtn.className == menuIconClosed) {
    menuBtn.className = menuIconOpened;
    menuContainer.className = menuContOpened;
  } else if (menuBtn.className == menuIconOpened) {
    menuBtn.className = menuIconClosed;
    menuContainer.className = menuContClosed;
  }
}