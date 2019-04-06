import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiservicepipeComponent } from './apiservicepipe.component';

describe('ApiservicepipeComponent', () => {
  let component: ApiservicepipeComponent;
  let fixture: ComponentFixture<ApiservicepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiservicepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiservicepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
