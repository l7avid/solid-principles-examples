import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactStudentComponent } from './react-student.component';

describe('ReactStudentComponent', () => {
  let component: ReactStudentComponent;
  let fixture: ComponentFixture<ReactStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
