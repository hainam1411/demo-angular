import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDatabindingComponent } from './test-databinding.component';

describe('TestDatabindingComponent', () => {
  let component: TestDatabindingComponent;
  let fixture: ComponentFixture<TestDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDatabindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
