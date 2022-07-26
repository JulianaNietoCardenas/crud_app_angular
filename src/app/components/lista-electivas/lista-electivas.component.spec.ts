import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaElectivasComponent } from './lista-electivas.component';

describe('ListaElectivasComponent', () => {
  let component: ListaElectivasComponent;
  let fixture: ComponentFixture<ListaElectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaElectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaElectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
