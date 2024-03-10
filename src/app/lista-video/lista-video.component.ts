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
