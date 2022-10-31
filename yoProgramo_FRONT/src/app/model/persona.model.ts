export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  bio: string;

  constructor(nombre: string, apellido: string, img: string, bio: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.bio = bio;
  }
}
