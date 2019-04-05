import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLocalerComponent } from './btn-localer.component';

describe('BtnLocalerComponent', () => {
  let component: BtnLocalerComponent;
  let fixture: ComponentFixture<BtnLocalerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLocalerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLocalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
