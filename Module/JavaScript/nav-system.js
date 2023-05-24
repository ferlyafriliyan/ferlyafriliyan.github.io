// nav system 

export default class Nav {
  constructor(id, target, transision) {
    this.id = id,
    this.target = target,
    this.transision = transision
  }
  
  get click() {
    let id = document.getElementById(this.id);
    let target = document.getElementById(this.target);
    let transision = this.transision;
    
    id.addEventListener("click", () => {
      target.classList.toggle(transision);
    } );
  }
}