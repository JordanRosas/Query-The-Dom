/* Use JavaScript to obtain a reference to the first section with the class of article_header 
and change its text with the textContent property to "Welcome to the {insert your name here} blog"*/

const firstSectionEl = document.querySelector('.article__header');
firstSectionEl.textContent = 'Welcome to the Jordan blog';

 /* Use JavaScript to obtain a reference to all article__header elements and change 
 their classList property value to: article__header important.*/

let element = document.querySelectorAll(".article__header");
for(var i = 0; i < element.length; i++){
    element[i].classList.add('important')
}

/* Obtain a reference to the element with a class of dashed and remove it.*/

let dashEl = document.querySelectorAll('.aside_box--dark', '.dashed');
for(var i = 0; i < dashEl.length; i++){
    dashEl[i].classList.remove('dashed')
}

/*Obtain a reference to the element with a class of article_footer and add the class of goldenrod it.*/

let footerClass = document.querySelectorAll('.article__footer');
for(var i = 0; i<footerClass.length; i++){
    footerClass[i].classList.add('goldenrod')
}
