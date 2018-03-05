let container = document.createElement('div');
container.className = 'container-fluid';
document.body.appendChild(container);

let clockElement = document.createElement('div');
container.appendChild(clockElement);
clockElement.className = 'smallDiv';

let clock = new Clock(clockElement);
clock.start();

let StartButton = new Button("Start",() => {
    StartButton.disable();
    StopButton.enable();
    clock.start();
});
StartButton.getElement().className = 'btn';
let StopButton = new Button("Stop",() => {
    StartButton.enable();
    StopButton.disable();
    clock.stop();
});
StopButton.getElement().className = 'btn';

let containerButtons = document.createElement('div');
containerButtons.className = 'containerB';
containerButtons.appendChild(StartButton.getElement());
containerButtons.appendChild(StopButton.getElement());

container.appendChild(containerButtons);

StartButton.disable();
StopButton.enable();
