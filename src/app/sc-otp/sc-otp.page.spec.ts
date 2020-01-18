import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScOtpPage } from './sc-otp.page';

describe('ScOtpPage', () => {
  let component: ScOtpPage;
  let fixture: ComponentFixture<ScOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
