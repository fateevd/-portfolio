

const animate = document.querySelectorAll('.efectly');

if(animate.length > 0){
    window.addEventListener('scroll',animScroll);
    function animScroll() {
        for(let i = 0;i<animate.length; i++)
        {
            const animat = animate[i];
            const aminatHeight = animat.offsetHeight;
            const animatOffset = offset(animat).top;
            const animatStart = 4;

            const animatPoint = window.innerHeight - aminatHeight / animatStart;

            if(aminatHeight > window.innerHeight){
                animatPoint = window.innerHeight - window.innerHeight / animatStart;

            }
            if((pageYOffset > animatOffset - animatPoint ) && pageYOffset < (animatOffset + aminatHeight))
            {
                animat.classList.add('__activ-wow');
            }
            else 
            {   
                if(!animat.classList.contains('no-efectly')){
                animat.classList.remove('__activ-wow');
                }
                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       return { top: rect.top + scrollTop, left: rect.left = scrollLeft}
        
    }
    
    setTimeout(()=> {
        animScroll();
    },300);
}

