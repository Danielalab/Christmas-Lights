const buttonOn = document.querySelector('button[data-action="on"]');
const buttonOff = document.querySelector('button[data-action="off"]');
const selectToChangeSpeed = document.querySelector('select[name=change-speed]');
const selectToChangeIntensity = document.querySelector('select[name=change-intensity]');
const inputNumberOfGlobes = document.querySelector('input[name="number-of-globes"]');
const btnToCreateGlobes = document.querySelector('button[data-action="create-globes"]');

const createGlobes = (numberOfGlobes) => {
  let result;
  if (numberOfGlobes === 0) {
    result = [];
  } else if (numberOfGlobes >= 1) {
    const div = document.createElement('div');
    div.classList.add('globe');
    result = [div].concat(createGlobes(numberOfGlobes - 1));
  }
  return result;
}

const showGlobes = (numberOfGlobes) => {
  const containerGlobesElement = document.querySelector('.globes-container');
  containerGlobesElement.innerHTML = '';
  containerGlobesElement.append(...createGlobes(numberOfGlobes));
}

/* Events */

buttonOff.addEventListener('click', () => {
  const globes = document.querySelectorAll('.globe');
  [...globes].forEach(globeElement => {
    globeElement.classList.add('paused-animation');
    globeElement.classList.remove('running-animation');
  });
});

buttonOn.addEventListener('click', () => {
  const globes = document.querySelectorAll('.globe');
  [...globes].forEach(globeElement => {
    globeElement.classList.remove('paused-animation');
    globeElement.classList.add('running-animation');
  });
});

selectToChangeSpeed.addEventListener('change', () => {
  const globes = document.querySelectorAll('.globe');
  const speedValue = (selectToChangeSpeed.value);
  [...globes].forEach(globe => {
    globe.style.animationDuration = speedValue + 's';
  });
});

selectToChangeIntensity.addEventListener('change', () => {
  const globes = document.querySelectorAll('.globe');
  const intensityValue = (selectToChangeIntensity.value);
  [...globes].forEach(globe => {
    globe.style.boxShadow = `2px 2px 15px ${intensityValue}px`;
  });
});

btnToCreateGlobes.addEventListener('click', () => {
  const numberOfGlobesValue = parseInt(inputNumberOfGlobes.value);
  showGlobes(numberOfGlobesValue);
});
