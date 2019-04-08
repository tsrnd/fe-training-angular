import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLifecycleTitleComponent } from './app-lifecycle-title.component';

describe('AppLifecycleTitleComponent', () => {
  let component: AppLifecycleTitleComponent;
  let fixture: ComponentFixture<AppLifecycleTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLifecycleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLifecycleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
