import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOutletComponent } from './details-outlet.component';

describe('DetailsOutletComponent', () => {
  let component: DetailsOutletComponent;
  let fixture: ComponentFixture<DetailsOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
