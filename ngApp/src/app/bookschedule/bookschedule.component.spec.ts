import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscheduleComponent } from './bookschedule.component';

describe('BookscheduleComponent', () => {
  let component: BookscheduleComponent;
  let fixture: ComponentFixture<BookscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
