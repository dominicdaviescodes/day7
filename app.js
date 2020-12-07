// grab elements

const left = document.querySelector('.left');
const right = docuement.querySelector('.right');
const container = document.querySelector('.container');

// dynamically add the classes
// add
left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
// remove
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

// add to right split
right.addEventListener('mouseenter', () =>
  container.classList.add('hover-rith')
);
// Remove
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
