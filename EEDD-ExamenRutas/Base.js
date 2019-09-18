class Base{
  constructor(nombre,referencia,latitud = 0,longitud = 0){
    this._nombre = nombre;
    this._referencia = referencia;
    this._latitud = latitud;
    this._longitud = longitud;
  }
  get nombre(){
    return this._nombre;
  }
  get latitud(){
    return this._latitud;
  }
  get longitud(){
    return this._longitud;
  }
  set latitud(newLatitud){
    this._latitud = newLatitud;
  }
  set longitud(newLongitud){
    this._longitud = newLongitud;
  }
}