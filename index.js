const buttonOn = document.querySelector('button[data-action="on"]');
const buttonOff = document.querySelector('button[data-action="off"]');
const selectToChangeSpeed = document.querySelector('select[name=change-speed]');
const selectToChangeIntensity = document.querySelector('select[name=change-intensity]');
const globes = document.querySelectorAll('.globe');

buttonOff.addEventListener('click', () => {
  [...globes].forEach(globeElement => {
    globeElement.classList.add('paused-animation');
    globeElement.classList.remove('running-animation');
  });
});

buttonOn.addEventListener('click', () => {
  [...globes].forEach(globeElement => {
    globeElement.classList.remove('paused-animation');
    globeElement.classList.add('running-animation');
  });
});

selectToChangeSpeed.addEventListener('change', () => {
  const speedValue = (selectToChangeSpeed.value);
  [...globes].forEach(globe => {
    globe.style.animationDuration = speedValue + 's';
  });
});

selectToChangeIntensity.addEventListener('change', () => {
  const intensityValue = (selectToChangeIntensity.value);
  [...globes].forEach(globe => {
    globe.style.boxShadow = `2px 2px 15px ${intensityValue}px`;
  });
});
