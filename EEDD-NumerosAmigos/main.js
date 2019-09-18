class Main {
  constructor() {
    let resultado = document.querySelector("#resultado");
    document.querySelector("#btn").addEventListener("click", () => {
      for (let i = 1; i <= 3000; i++) {
        let divisoresDeI = this.sumarDivisores(i);
        for (let j = 1; j < i; j++) {
          let divisoresDeJ = this.sumarDivisores(j);
          if (divisoresDeI === j && divisoresDeJ === i) {
              resultado.textContent += `(${j},${i}) `;
          }
        }
      }
    });
    
  }
  sumarDivisores(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
      if (numero % i == 0) {
        suma += i;
      }
    }
    return suma;
  }
}
let m = new Main();




