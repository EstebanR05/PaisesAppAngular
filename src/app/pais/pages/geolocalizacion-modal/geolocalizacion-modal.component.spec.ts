import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalizacionModalComponent } from './geolocalizacion-modal.component';

describe('GeolocalizacionModalComponent', () => {
  let component: GeolocalizacionModalComponent;
  let fixture: ComponentFixture<GeolocalizacionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocalizacionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalizacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
