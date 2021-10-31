import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
    
const player = new Player(iframe);

let LocStorData

init();

player.on('timeupdate', throttle(locStorSetItem, 1000));

player.setCurrentTime(LocStorData).then(function(seconds) {}).catch(errorFun);

function locStorSetItem(event) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(event));
};

function init(){
    LocStorData = localStorage.getItem(CURRENT_TIME, "seconds");
    if(LocStorData){
        LocStorData = JSON.parse(LocStorData).seconds;
    }
}

function errorFun(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
}