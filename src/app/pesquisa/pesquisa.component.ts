import { Component, OnInit } from '@angular/core';
import { ArquivoService } from '../arquivo.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  termoBusca: string;
  totalEncontrados;
  listaResultado;

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {
  }


  pesquisar() {
    this.arquivoService.pesquisarTermo(this.termoBusca).subscribe(
      (data: any) => {
        this.totalEncontrados = data.totalEncontrados;
        this.listaResultado = data.resultado;
    });
  }

  limparCampos() {
    this.totalEncontrados = undefined;
    this.listaResultado = [];
    this.termoBusca = undefined;
  }

}
