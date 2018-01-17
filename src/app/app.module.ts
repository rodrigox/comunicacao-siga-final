import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { ContatoComponent } from './contato/contato.component';
import { BodyContentComponent } from './body/body-content/body-content.component';
import { BodyContentContatoComponent } from './body/body-content/body-content-contato/body-content-contato.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    BannerComponent,
    BodyComponent,
    ContatoComponent,
    BodyContentComponent,
    BodyContentContatoComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
