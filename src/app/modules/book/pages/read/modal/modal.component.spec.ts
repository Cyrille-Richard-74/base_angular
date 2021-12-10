import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadModalComponent } from './modal.component';

describe('ReadModalComponent', () => {
  let component: ReadModalComponent;
  let fixture: ComponentFixture<ReadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
