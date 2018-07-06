import { Component, OnInit } from '@angular/core';
import { ArquivoService } from '../arquivo.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  termoBusca: string;

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {
  }


  pesquisar() {
    this.arquivoService.pesquisarTermo(this.termoBusca).subscribe(
      (data) => {
        console.log('Retornei da pesquisa');
        console.log(data);
    });
  }

}
