import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleContentComponent } from './lifecycle-content.component';

describe('LifecycleContentComponent', () => {
  let component: LifecycleContentComponent;
  let fixture: ComponentFixture<LifecycleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
