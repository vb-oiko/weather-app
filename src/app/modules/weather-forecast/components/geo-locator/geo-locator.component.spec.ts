import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocatorComponent } from './geo-locator.component';

describe('GeoLocatorComponent', () => {
  let component: GeoLocatorComponent;
  let fixture: ComponentFixture<GeoLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
