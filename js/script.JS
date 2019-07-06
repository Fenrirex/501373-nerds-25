
    var link = document.querySelector(".button-address");

    var popup = document.querySelector(".modal");
    var close = popup.querySelector(".modal-close");
    var form = popup.querySelector("form");
	var submitButtom = popup.querySelector(".btn");
	var modalWrp = popup.querySelector(".modal-wrp");


    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    });
	
    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    });
	
    submitButtom.addEventListener("click", function(evt) {
      evt.preventDefault();
	  if(form.checkValidity()) {	   
	    popup.classList.remove("modal-show");
	    form.reset(); 
	  } else {
	    modalWrp.classList.add("shake");
		setTimeout(function () { modalWrp.classList.remove("shake") }, 2000);
	  }
    });