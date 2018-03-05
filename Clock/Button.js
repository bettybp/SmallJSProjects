class Button{
    constructor(title,Onclick) {
        this._element = document.createElement('button');
        this._element.innerHTML = title;
        this._element.onclick = Onclick;
    }

    getElement(){
        return this._element;
    }

    enable(){
        this._element.display = true;
    }

    disable(){
        this._element.display = false;
    }
}
