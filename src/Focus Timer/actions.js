import * as state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as audios from './audios.js';

export function toggleRunning(){
    state.default.isRunning = document.documentElement.classList.toggle('running');
    timer.countDown();
    console.log(state)
}

export function stop(){
    state.default.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    console.log(state)
}

export function set(){
    el.seconds.setAttribute('contenteditable', true);
    el.seconds.focus();
}

export function toggleMusic(){
    state.default.isMute = true;
    audios.forest.pause();
    audios.coffee.pause();
    audios.rain.pause();
    audios.fire.pause();
}

export function sum(){
    let sumSeconds = state.default.seconds
    sumSeconds++
    state.default.seconds = sumSeconds;
    timer.updateDisplay()
}

export function subtract(){
    let sumSeconds = state.default.seconds
    sumSeconds--
    state.default.seconds = sumSeconds;
    timer.updateDisplay()
}

export function forest(){
    state.default.isMute = false;
    if (state.default.isMute != true){
        toggleMusic();
    }
    audios.forest.play();
}

export function coffee(){
    state.default.isMute = false;
    if (state.default.isMute != true){
        toggleMusic();
    }
    audios.coffee.play();
}

export function rain(){
    state.default.isMute = false;
    if (state.default.isMute != true){
        toggleMusic();
    }
    audios.rain.play();
}

export function fire(){
    state.default.isMute = false;
    if (state.default.isMute != true){
        toggleMusic();
    }
    audios.fire.play();
}