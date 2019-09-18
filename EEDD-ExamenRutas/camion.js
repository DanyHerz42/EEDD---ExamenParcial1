class Camion{
  constructor(numeroDeUnidad, rutaAsignada, kilometraje){
    this._numUnidad = numeroDeUnidad;
    this._rutaAsignada = rutaAsignada;
    this._kilometraje = kilometraje;
  }
  get numeroDeUnidad(){
    return this._numUnidad;
  }
  get rutaAsignada(){
    return this._rutaAsignada;
  }
  get kilometraje(){
    return this._kilometraje;
  }
  set numeroDeUnidad(newNumero){
    this._numUnidad = newNumero;
  }
  set kilometraje(newKilometraje){
    this._kilometraje = newKilometraje;
  }
}