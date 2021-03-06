import { ArquivoService } from './arquivo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UploadArquivosComponent } from './upload-arquivos/upload-arquivos.component';
import { AppRoutingModule } from './/app-routing.module';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadArquivosComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArquivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
