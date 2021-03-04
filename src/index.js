import "./style.css";
import homeTab from './home.js';
import menuTab from './menu.js';
import contactTab from './contact.js';

//pageHeader();
homeTab();
menuTab();
contactTab();

document.getElementById("button-home").addEventListener("click", function() {openTab(event, 'tab-home')});
document.getElementById("button-menu").addEventListener("click", function() {openTab(event, 'tab-menu')});
document.getElementById("button-contact").addEventListener("click", function() {openTab(event, 'tab-contact')});

document.getElementById('tab-home').style.display = "block";

document.body.style.backgroundImage = "url('images/food.png')";
document.getElementById('page-subtitle').style.backgroundImage = "url('images/michelin-star-png-2.png')";

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}