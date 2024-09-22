import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScoresListComponent } from './app-top-scores-list.component';

describe('TopScoresListComponent', () => {
  let component: TopScoresListComponent;
  let fixture: ComponentFixture<TopScoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopScoresListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopScoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
