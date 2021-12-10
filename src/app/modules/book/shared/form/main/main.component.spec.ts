import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMainFormComponent } from './main.component';

describe('BookMainFormComponent', () => {
  let component: BookMainFormComponent;
  let fixture: ComponentFixture<BookMainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
