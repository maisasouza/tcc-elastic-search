import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-arquivos',
  templateUrl: './upload-arquivos.component.html',
  styleUrls: ['./upload-arquivos.component.css']
})
export class UploadArquivosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  indexarArquivo() {
    console.log('Chamar a função de leitura e indexação');
  }

}
