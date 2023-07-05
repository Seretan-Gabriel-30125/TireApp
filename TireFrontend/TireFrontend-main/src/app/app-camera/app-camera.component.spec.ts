import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCameraComponent } from './app-camera.component';

describe('AppCameraComponent', () => {
  let component: AppCameraComponent;
  let fixture: ComponentFixture<AppCameraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCameraComponent]
    });
    fixture = TestBed.createComponent(AppCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
