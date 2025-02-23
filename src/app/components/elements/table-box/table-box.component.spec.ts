import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBoxComponent } from './table-box.component';

describe('TableBoxComponent', () => {
  let component: TableBoxComponent;
  let fixture: ComponentFixture<TableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
