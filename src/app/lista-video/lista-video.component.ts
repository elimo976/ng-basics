import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../models/video';

@Component({
  selector: 'app-lista-video',
  templateUrl: './lista-video.component.html',
  styleUrls: ['./lista-video.component.css']
})
export class ListaVideoComponent {
  videos: Video[] = [
    {
      titolo: "Dune",
      url: "https://www.youtube.com/embed/zn6huKg_8lA?si=QAdVkRH-2GRMDdV-"
    },
    {
      titolo: "Il Cavaliere Oscuro",
      url: "https://www.youtube.com/embed/ZdmR_s0kMaI?si=56Q8corW1oN6a4t7"
    },
    {
      titolo: "Interstellar",
      url: "https://www.youtube.com/embed/4J6qFru-6xk?si=u2O-t01XF2hlpKgw"
    }
  ];

  safeUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrls = this.videos.map(video => this.sanitizer.bypassSecurityTrustResourceUrl(video.url));
  }
}

/*
SPIEGAZIONE PER "SANIFICARE" L'URL PER RENDERLO SICURO PER ANGULAR:

- Dichiarazione della variabile: Il codice dichiara un array di SafeResourceUrl chiamato safeUrls. SafeResourceUrl è un tipo (sì, proprio tipo) fornito da Angular che rappresenta un URL sicuro che può essere utilizzato in contesti in cui è richiesta una certa sicurezza, come ad esempio quando si utilizzano URL provenienti da sorgenti non attendibili. In pratica il SafeResourceUrl marca gli URL come sicuri.

- Costruttore: Il costruttore della classe accetta un'istanza di DomSanitizer. Questo servizio è fornito da Angular per manipolare i valori di DOM in modo sicuro. Viene iniettato tramite dependency injection (La dependency injection (DI) è un design pattern che serve per gestire le dipendenze tra i diversi componenti di un'applicazione in modo più modulare, flessibile e facilmente testabile).

- Inizializzazione di safeUrls: All'interno del costruttore, c'è una riga di codice che inizializza l'array safeUrls utilizzando il metodo map() su l'array 'videos'.

- map() viene utilizzato per iterare su ogni elemento dell'array videos.
Per ogni video, sanitizer.bypassSecurityTrustResourceUrl() viene chiamato sull'URL del video. Questo metodo fa parte del DomSanitizer e ritorna un oggetto SafeResourceUrl, che rappresenta l'URL sicuro.
L'array risultante di SafeResourceUrl viene assegnato a safeUrls.

- Il metodo bypassSecurityTrustResourceUrl() esiste per accettare un URL come parametro restituendo un oggetto SafeResourceUrl. Questo oggetto rappresenta l'URL marcato come sicuro dal sistema di sanitizzazione di Angular. In pratica, ciò significa che Angular è consapevole che l'URL fornito è considerato sicuro e può essere utilizzato in modo sicuro all'interno dell'applicazione.

*/
