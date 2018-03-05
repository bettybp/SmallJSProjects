class Clock {
    constructor(element) {
        this._element = element;
        this._timeElem = document.createElement('span');
        this._element.appendChild(this._timeElem);
    }

    start() {
        if(!this._timerToken) {
            this._timerToken = setInterval(() => this._setTime(new Date().toLocaleTimeString()),500);
        }
    }

    stop(){
        if(this._timerToken){
            clearInterval(this._timerToken);
            this._timerToken = undefined;
        }
    }

    //privateMethod
    _setTime(time){
        this._time = time;
        this._timeElem.innerHTML = time;
    }
}
