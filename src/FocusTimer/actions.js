import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running');
    sounds.buttonPressAudio.play();
    timer.countdown();
}

export function stop(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    sounds.buttonPressAudio.play();
    timer.updateDisplay();
}

export function set(){
    el.minute.setAttribute('contenteditable', true);
    sounds.buttonPressAudio.play();
    el.minute.focus();
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('musicOn')

    if (state.isMute) {
        sounds.bgAudio.play();
        return
    } else {
        sounds.bgAudio.pause();
    }
}