const pageHeader = (function(){
  let pageTitle = document.createElement('h1');
  let pageContent = document.getElementById('content');
  let subTitle = document.createElement('div');
  let menuHeader = document.createElement('div');
  menuHeader.classList.add('tabs');

  //subTitle.innerHTML = "now with delivery";
  subTitle.id = 'page-subtitle';
  pageTitle.textContent = "Fancy restaurant";
  pageTitle.id = 'page-title';

  pageContent.appendChild(pageTitle);
  pageContent.appendChild(subTitle);
  pageContent.appendChild(menuHeader);

  return{
    menuHeader
  }
})();

export default pageHeader;