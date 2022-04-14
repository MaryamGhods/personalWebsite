for (i=0 ; i<4 ; i++){
  const select = document.querySelectorAll('.offcanvas-body a')[i];
  select.addEventListener("click", () =>{
    document.querySelector('.offcanvas').setAttribute("data-bs-backdrop" , 'false');
    document.querySelector('.offcanvas').style.visibility = 'hidden';
  });
}
