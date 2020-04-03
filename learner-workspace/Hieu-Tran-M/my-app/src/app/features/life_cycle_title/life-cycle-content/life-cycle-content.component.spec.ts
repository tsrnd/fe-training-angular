import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleContentComponent } from './life-cycle-content.component';

describe('LifeCycleContentComponent', () => {
  let component: LifeCycleContentComponent;
  let fixture: ComponentFixture<LifeCycleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
