import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleTitleComponent } from './lifecycle-title.component';

describe('AppLifecycleTitleComponent', () => {
  let component: LifecycleTitleComponent;
  let fixture: ComponentFixture<LifecycleTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
