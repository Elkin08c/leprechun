import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeprechaunComponent } from './leprechaun/leprechaun.component';
import { AnatomiaComponent } from './anatomia/anatomia.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CerebroComponent } from './cabeza/cerebro/cerebro.component';
import { TorsoComponent } from './torso/torso.component';
import { PechoComponent } from './torso/pecho/pecho.component';
import { BrazosComponent } from './brazos/brazos.component';
import { LadoComponent } from './brazos/lado/lado.component';
import { PiernasComponent } from './piernas/piernas.component';
import { DerechaComponent } from './piernas/derecha/derecha.component';

@NgModule({
  declarations: [
    AppComponent,
    LeprechaunComponent,
    AnatomiaComponent,
    CabezaComponent,
    CerebroComponent,
    TorsoComponent,
    PechoComponent,
    BrazosComponent,
    LadoComponent,
    PiernasComponent,
    DerechaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
