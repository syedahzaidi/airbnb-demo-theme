Sticky();
window.addEventListener('scroll', function(e) {
    Sticky();
  });
  

  function Sticky(){
    if(element){
      let r =  element.getBoundingClientRect();
      if(r.top <= 0 ){
        this.document.body.classList.add('isSticked');
      } else {
       this.document.body.classList.remove('isSticked');
      }
    }

  }