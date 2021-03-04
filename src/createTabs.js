import pageHeader from './header.js';

const createTabs = function(tabName, tabId, tabTitle, tabContent){
// tab header
  let buttonTab = document.createElement('button');
  buttonTab.textContent = tabName;
  buttonTab.classList.add('tablinks');
  buttonTab.id = `button-${tabId}`;
  pageHeader.menuHeader.appendChild(buttonTab);

// tab content
  let TabDiv = document.createElement('div');
  TabDiv.id = `tab-${tabId}`;
  TabDiv.classList.add('tabcontent');
  document.body.appendChild(TabDiv);

  let createTabTitle = document.createElement('h3');
  createTabTitle.textContent = tabTitle;
  TabDiv.appendChild(createTabTitle);

  let createTabContent = document.createElement('p');
  createTabContent.innerHTML = tabContent;
  TabDiv.appendChild(createTabContent);
}

export default createTabs;