import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { UploadArquivosComponent } from './upload-arquivos/upload-arquivos.component';

const routes: Routes = [
  { path: 'upload', component: UploadArquivosComponent },
  { path: 'pesquisa', component: PesquisaComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
