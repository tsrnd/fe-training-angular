import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleTitleComponent } from './life-cycle-title.component';

describe('LifeCycleTitleComponent', () => {
  let component: LifeCycleTitleComponent;
  let fixture: ComponentFixture<LifeCycleTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
