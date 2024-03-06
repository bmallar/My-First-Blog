const back = document.querySelector('.prev');


// Clicking previous displays previous image in carousel
back.addEventListener('click', function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
  
    navigate(-1);
  });