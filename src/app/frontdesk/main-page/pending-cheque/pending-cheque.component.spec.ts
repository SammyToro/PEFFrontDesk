import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChequeComponent } from './pending-cheque.component';

describe('PendingChequeComponent', () => {
  let component: PendingChequeComponent;
  let fixture: ComponentFixture<PendingChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
