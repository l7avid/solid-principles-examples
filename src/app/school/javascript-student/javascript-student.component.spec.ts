import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptStudentComponent } from './javascript-student.component';

describe('JavascriptStudentComponent', () => {
  let component: JavascriptStudentComponent;
  let fixture: ComponentFixture<JavascriptStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
