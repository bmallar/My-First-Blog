const back = document.querySelector('.prev');



back.addEventListener('click', function (event) {
    
    event.stopPropagation();
  
    navigate(-1);
  });

  



