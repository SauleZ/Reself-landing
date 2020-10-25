import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaBasicComponent } from './java-basic.component';

describe('JavaBasicComponent', () => {
  let component: JavaBasicComponent;
  let fixture: ComponentFixture<JavaBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
