import * as el from './elements.js';
import * as actions from './actions.js';
import * as state from './state.js';
import { updateDisplay } from './timer.js';

export function registerControl() {
    el.controls.addEventListener('click', (event)=>{
        const action = event.target.dataset.action;

        if (typeof actions[action] != 'function') {
            return
        } else {
            actions[action]();
        }
    })
}

export function setMinutes(){

    el.minute.addEventListener('focus', ()=> el.minute.textContent = '');

    el.minute.onkeypress = (event)=> /\d/.test(event.key);

    el.minute.addEventListener('blur', (event)=> {
        let time = event.target.textContent;
        time = time > 15 ? 15 : time;

        state.default.minutes = time;
        state.default.seconds = 0;

        updateDisplay();
        el.minute.removeAttribute('contenteditable');
    })
}