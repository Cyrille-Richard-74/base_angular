import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSidebarComponent } from './sidebar.component';

describe('ReadSidebarComponent', () => {
  let component: ReadSidebarComponent;
  let fixture: ComponentFixture<ReadSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
