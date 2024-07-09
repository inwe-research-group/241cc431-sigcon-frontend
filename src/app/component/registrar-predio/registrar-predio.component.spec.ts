import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPredioComponent } from './registrar-predio.component';

describe('RegistrarPredioComponent', () => {
  let component: RegistrarPredioComponent;
  let fixture: ComponentFixture<RegistrarPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPredioComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
