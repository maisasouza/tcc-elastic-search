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
  resposta: string;
  inputArquivo;

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {
    this.quantidadeArquivo = 0;
    this.resposta = '';
  }

  uploadArquivo() {
    console.log('Chamar a função de leitura e indexação');
    this.arquivoService.enviarArquivo(this.arquivoPdf, this.quantidadeArquivo).subscribe(
      (retorno) => {
        this.resposta = 'Arquivo enviado com sucesso !';
        this.limparCampos();
      }, (error) => {
        this.resposta = 'Erro ! Olhar console !';
        console.log(error);
      });
  }

  limparCampos() {
    this.quantidadeArquivo = 0;
    this.inputArquivo = undefined;
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
