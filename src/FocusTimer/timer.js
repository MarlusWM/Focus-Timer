import state from './state.js';
import * as el from './elements.js';
import * as actions from './actions.js';
import * as sounds from './sounds.js';

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minute.textContent = String(minutes).padStart(2, "0");
    el.second.textContent = String(seconds).padStart(2, "0");
}

export function countdown(){

    clearTimeout();

    if (!state.isRunning) {
        return
    } else {
        let minute = Number(el.minute.textContent)
        let second = Number(el.second.textContent)

        second--

        if (second < 0){
            second = 59;
            minute--
        }

        if (minute < 0){
            actions.stop();
            sounds.kichenTimer.play()
            return
        }

        updateDisplay(minute, second);

    }
    state.countdownId = setTimeout(()=> countdown(), 1000)
    console.log(state.countdownId)
}