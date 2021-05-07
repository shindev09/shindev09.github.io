
function change(type,element){
    let tabs = document.getElementsByClassName('header__navbar-item');
    for(var i = 0; i < tabs.length; i++){
      tabs[i].style.color = '#484854';
      tabs[i].style.transform = 'translateX(0)';
    }
    element.style.color = '#e5b2e2';
    element.style.transform = 'translateX(5px)';
    document.getElementById(type).style.display = 'block';
    switch(type){
      case 'information':
        document.getElementById('education').style.display = 'none';
        document.getElementById('interests').style.display = 'none';
        break;
      case 'education':
        document.getElementById('information').style.display = 'none';
        document.getElementById('interests').style.display = 'none';
        break;
      case 'interests':
        document.getElementById('education').style.display = 'none';
        document.getElementById('information').style.display = 'none';
        break;  
      
    }
}