import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingResultComponent } from './typing-result.component';

describe('TypingResultComponent', () => {
  let component: TypingResultComponent;
  let fixture: ComponentFixture<TypingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
