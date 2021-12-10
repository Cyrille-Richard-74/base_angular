import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSidebarComponent } from './sidebar.component';

describe('UpdateSidebarComponent', () => {
  let component: UpdateSidebarComponent;
  let fixture: ComponentFixture<UpdateSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
