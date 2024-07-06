import * as el from './elements.js';
import * as events from './events.js';
import * as timer from './timer.js';

export function focusTimer(minutes, seconds){
    el.minutes.textContent = minutes;
    el.seconds.textContent = seconds;

    events.registerControls();
    events.controlsMusic();
    timer.updateDisplay(minutes, seconds);
}