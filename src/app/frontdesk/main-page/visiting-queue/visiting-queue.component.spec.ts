import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingQueueComponent } from './visiting-queue.component';

describe('VisitingQueueComponent', () => {
  let component: VisitingQueueComponent;
  let fixture: ComponentFixture<VisitingQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitingQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
