import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalledVisitorComponent } from './called-visitor.component';

describe('CalledVisitorComponent', () => {
  let component: CalledVisitorComponent;
  let fixture: ComponentFixture<CalledVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalledVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalledVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
