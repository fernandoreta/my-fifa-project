import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDetailComponent } from './app-player-detail.component';


describe('PlayerDetailComponent', () => {
  let component: PlayerDetailComponent;
  let fixture: ComponentFixture<PlayerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
