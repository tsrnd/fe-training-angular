import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLifecycleContentComponent } from './app-lifecycle-content.component';

describe('AppLifecycleContentComponent', () => {
  let component: AppLifecycleContentComponent;
  let fixture: ComponentFixture<AppLifecycleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLifecycleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLifecycleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
