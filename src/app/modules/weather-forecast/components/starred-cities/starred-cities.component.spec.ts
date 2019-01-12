import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredCitiesComponent } from './starred-cities.component';

describe('StarredCitiesComponent', () => {
  let component: StarredCitiesComponent;
  let fixture: ComponentFixture<StarredCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
