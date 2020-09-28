document.addEventListener("DOMContentLoaded", function(){
  var textarea = document.querySelector('textarea');
  textarea.addEventListener('keyup', function(event){
    if(this.scrollTop > 0 && this.offsetHeight < 110){
      if(this.scrollTop < 110){
        this.style.height = this.scrollHeight + "px";
      }else{
        this.style.height = "139px";
      }
    }
    if(event.key === "Backspace" && this.offsetHeight > 50 && this.scrollHeight < 169){
      this.style.height = `${this.offsetHeight-15}px`;
    }
    if(this.textLength === 0){
      this.style.height = "50px";
    }
  });
});