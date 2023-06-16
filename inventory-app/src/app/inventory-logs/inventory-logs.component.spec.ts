import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLogsComponent } from './inventory-logs.component';

describe('InventoryLogsComponent', () => {
  let component: InventoryLogsComponent;
  let fixture: ComponentFixture<InventoryLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryLogsComponent]
    });
    fixture = TestBed.createComponent(InventoryLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
