import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCameraComponent } from './app-camera/app-camera.component';

const routes: Routes = [
  {
    path: 'camera',
    component: AppCameraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
