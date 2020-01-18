import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScOtpCodePage } from './sc-otp-code.page';

describe('ScOtpCodePage', () => {
  let component: ScOtpCodePage;
  let fixture: ComponentFixture<ScOtpCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScOtpCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScOtpCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
