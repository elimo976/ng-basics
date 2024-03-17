import { Component } from '@angular/core';
// import { Video } from './models/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero?: number = 3; // ? è nullable, sinonimo di undefined

  //title: string = 'ng-basics';

  public title: string = "Soundtrack by Hans Zimmer"; // public: tutte le proprietà e i metodi verranno riconosciute anche fuori dalla classe dove si trova e l'html potrà accdedervi. Se non indicato, è sottinteso
  // (string) se non tipizzo, ts lo assegna da solo. Cfr. inference
  private apiKey = "asdasdasdasd"; //quando voglio tenermi qualcosa che sia accessibile solo dalla mia classe. NO altre classi, NO da html. P.es. con chiamata ajax con apiKey
  ok: number | boolean = 0;
  preferitiVisibili = false;

  getPost() {
    // chiamata ajax con apiKey
    this.numero = undefined; // qui posso assegnargli un numero, un valore o svuotarla

    // if (this.numero) {
    // let totale = 10 + this.numero;
    // } in questo modo ho gestito la situazione di qualcosa che POTREBBE essere null o undefined

    let totale = 10 + this.numero!; // con il ! forzo, p.es. in vista di inserimento futuro 
    
    this.ok = 3; // se assegno valore tipo stringa, darà errore, perchè accetta solo numero o booleano

  } 

  // aggiornaTitolo() {
  //   this.title = document.querySelector<HTMLInputElement>("#inputTitolo")!.value;
  // } funzione usata nell'esempio di riga 13 dell' HTML
  togglePreferiti() {
  this.preferitiVisibili =!this.preferitiVisibili;
  }
}
