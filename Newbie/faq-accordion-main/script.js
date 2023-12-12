'use strict';

const sectionsContainer = document.querySelector('.sections-container');
const moreButton = document.querySelectorAll('.more-button');

for(let button = 0; button < moreButton.length; button++) {
    moreButton[button].addEventListener('click', ()=>{
        const sectionWrapper = moreButton[button].parentElement.parentElement;
        let rowValue = new Array(moreButton.length).fill('1fr');
        rowValue[button] = 'auto';
        let ariaPressed = moreButton[button].getAttribute('aria-pressed');

        moreButton[button].setAttribute(
            'aria-pressed',
            (ariaPressed == 'false') ? 'true' : 'false');
        if(!sectionWrapper.classList.toggle('active')) rowValue[button] = '1fr';
        sectionsContainer.style.gridTemplateRows = rowValue.join(' ');
    });
}