import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMainComponent } from './main.component';

describe('ReadMainComponent', () => {
  let component: ReadMainComponent;
  let fixture: ComponentFixture<ReadMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
