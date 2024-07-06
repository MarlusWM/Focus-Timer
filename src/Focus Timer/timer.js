import * as el from './elements.js';
import * as state from './state.js';
import * as actions from './actions.js';

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.default.minutes;
    seconds = seconds ?? state.default.seconds;

    el.minutes.textContent = String(minutes).padStart(2, '0');
    el.seconds.textContent = String(seconds).padStart(2, '0');

    console.log(seconds)
}

export function countDown(){

    if (!state.default.isRunning) {
        return
    } else {
        let minutes = Number(el.minutes.textContent);
        let seconds = Number(el.seconds.textContent);
    
        seconds--

        if (seconds < 0) {
            actions.stop();
            return
        }

        updateDisplay(minutes, seconds);
    }

    setTimeout(() => {
        countDown()
    }, 1000);
}