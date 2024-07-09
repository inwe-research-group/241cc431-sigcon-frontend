import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSolicitanteComponent } from './registrar-solicitante.component';

describe('RegistrarSolicitanteComponent', () => {
  let component: RegistrarSolicitanteComponent;
  let fixture: ComponentFixture<RegistrarSolicitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarSolicitanteComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
