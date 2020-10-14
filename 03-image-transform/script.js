const inputs = document.querySelectorAll('.controls input');
//this is a nodelist, which is different from an array. 

function handleUpdate() {
  // console.log(this.dataset); returns every single element which have a 
  // data- and transform to you in a object.
  const suffix = this.dataset.sizing || ''; // we do 'or nothing' for color, which don't have sizing
  console.log(this.name);
  console.log(this.value);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));