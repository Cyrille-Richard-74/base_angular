import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToolbarComponent } from './toolbar.component';

describe('UpdateToolbarComponent', () => {
  let component: UpdateToolbarComponent;
  let fixture: ComponentFixture<UpdateToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
