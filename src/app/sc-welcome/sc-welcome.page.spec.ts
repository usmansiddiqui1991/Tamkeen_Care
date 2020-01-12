import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScWelcomePage } from './sc-welcome.page';

describe('ScWelcomePage', () => {
  let component: ScWelcomePage;
  let fixture: ComponentFixture<ScWelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScWelcomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScWelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
