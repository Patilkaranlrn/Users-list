import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstChildComponent } from './myfirst-child.component';

describe('MyfirstChildComponent', () => {
  let component: MyfirstChildComponent;
  let fixture: ComponentFixture<MyfirstChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyfirstChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
