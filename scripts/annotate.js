import * as RoughNotation from 'https://unpkg.com/rough-notation?module';

const annotate = (elements) => {
    elements.forEach(element =>{
        const annotation = RoughNotation.annotate(element, { type: 'highlight' });
        annotation.show();

        element.addEventListener('mouseenter', function(e){
            annotation.hide();
        })
        element.addEventListener('mouseleave', function(e){
            annotation.show();
        })
    } )
}

document.addEventListener("DOMContentLoaded", function() {
    const checkExist = () => {
        const check =  setInterval(function() {
            const selector = '.comment'
            let e = document.querySelectorAll(selector)
            if (e.length > 0) {
                clearInterval(check)
                annotate(e)
            }
        }, 300);
        
    }
    
    const searchBox = document.querySelector('#search-box')
    searchBox.addEventListener("keydown", function() {
        console.log('keydown');
        checkExist  ()
    })
});