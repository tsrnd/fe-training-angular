import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhutagComponent } from './phutag.component';

describe('PhutagComponent', () => {
  let component: PhutagComponent;
  let fixture: ComponentFixture<PhutagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhutagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhutagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
