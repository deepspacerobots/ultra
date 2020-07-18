export default class UltraAnimate {
    constructor(element){
        this.element = document.querySelector(element);
        this.delay = this.delay.bind(this);
        
        return this;
    }

    show(){
        if(this.delay) {
           setTimeout(() => {
            this.element.classList.add("visible");
           }, this.delay)
        } else {
            this.element.classList.add("visible");
        }
        return this;
    }

    delay(delay){
        this.delay = delay;
        return this;
    }
}