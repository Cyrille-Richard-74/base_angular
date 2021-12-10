import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSidebarComponent } from './sidebar.component';

describe('SharedSidebarComponent', () => {
  let component: SharedSidebarComponent;
  let fixture: ComponentFixture<SharedSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
