import {Autor} from "./Autor.model";

export class Noticia{
  id:number;
  titulo:string;
  tags:['Politica','Futeball','Fofoca','Economia'];
  conteudo:string;
  autor:Autor;

  constructor(id:number, titulo:string, tags:['Politica','Futeball','Fofoca','Economia'], conteudo:string, autor:Autor){
    this.id = id;
    this.titulo = titulo;
    this.tags = tags;
    this.conteudo = conteudo;
    this.autor = autor


  }
}
