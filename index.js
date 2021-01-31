const buttonOn = document.querySelector('button[data-action="on"]');
const buttonOff = document.querySelector('button[data-action="off"]');
const globes = document.querySelectorAll('.globe');

buttonOff.addEventListener('click', () => {
  [...globes].forEach(globeElement => {
    globeElement.classList.add('paused-animation');
  });
});
