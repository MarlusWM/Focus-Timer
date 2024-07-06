import * as el from './elements.js';
import * as actions from './actions.js';

export function registerControls(){
    el.controls.addEventListener('click', (event)=> {
        const action = event.target.dataset.action;

        actions[action]();
        
    })
}

export function controlsMusic(){
    el.musicControls.addEventListener('click', (event)=> {
        const action = event.target.dataset.action;

        actions[action]();
        
    })
}