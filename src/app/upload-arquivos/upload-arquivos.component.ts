import { ArquivoService } from './../arquivo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload-arquivos',
  templateUrl: './upload-arquivos.component.html',
  styleUrls: ['./upload-arquivos.component.css']
})
export class UploadArquivosComponent implements OnInit {

  quantidadeArquivo: number;
  arquivoPdf: File;

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {
    this.quantidadeArquivo = 0;
  }

  uploadArquivo() {
    console.log('Chamar a função de leitura e indexação');
    this.arquivoService.enviarArquivo(this.arquivoPdf, this.quantidadeArquivo).subscribe((retorno) => console.log('worked !'));
  }

  lerArquivo(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.arquivoPdf = file;
    } else {
      this.arquivoPdf = undefined;
    }
  }

}
