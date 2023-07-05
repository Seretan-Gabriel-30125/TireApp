import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WebcamModule } from 'ngx-webcam';
import { AppCameraComponent } from './app-camera/app-camera.component';
import { FormsModule } from '@angular/forms';
import { TyresListComponent } from './data-list-compontent/tyres-list/tyres-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, AppCameraComponent,TyresListComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, WebcamModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
