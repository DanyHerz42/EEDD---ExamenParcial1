class Ruta{
  constructor(nombre, duracion, bases = 5){
    this._nombre = nombre;
    this._duracion = duracion; 
    this._noDeBases = bases;
  }
  get nombre(){
    return this._nombre;
  }
  get duracion(){
    return this._duracion;
  }
  get noDeBases(){
    return this._noDeBases;
  }
  set nombre(newNombre){
    this._nombre = newNombre;
  }
  set duracion(newDuracion){
    this._duracion = newDuracion;
  }
}