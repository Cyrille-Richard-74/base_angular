import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadToolbarComponent } from './toolbar.component';

describe('ReadToolbarComponent', () => {
  let component: ReadToolbarComponent;
  let fixture: ComponentFixture<ReadToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
