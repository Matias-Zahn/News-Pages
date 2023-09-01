const navOpt= document.querySelector('.nav--opt');
const svgClose= document.querySelector('.svg--close')
const svgOpen= document.querySelector('.svg--open')
const menu= document.querySelector('.menu')

navOpt.addEventListener('click', function(){
    menu.classList.toggle('menu--show');
    svgOpen.classList.toggle('svg--open__js');

    
    if (svgClose.classList.contains('svg--close__js')) {
        svgClose.classList.remove('svg--close__js')
    }else {
        svgClose.classList.add('svg--close__js')
        
    }
})