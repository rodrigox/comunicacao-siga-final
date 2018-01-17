import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentContatoComponent } from './body-content-contato.component';

describe('BodyContentContatoComponent', () => {
  let component: BodyContentContatoComponent;
  let fixture: ComponentFixture<BodyContentContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContentContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContentContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
