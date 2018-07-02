import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArquivoService {

  constructor(private http: HttpClient) { }

  enviarArquivo(file: File, quantidade: number) {
    const formData: FormData = new FormData();
    const valor = {
      quantidade: quantidade
    };


    formData.append('file', file);
    formData.append('quantidade', new Blob([JSON.stringify(valor)]));

    return this.http.post('http://localhost:8080/upload', formData);
  }

}
