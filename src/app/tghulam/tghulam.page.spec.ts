import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TghulamPage } from './tghulam.page';

describe('TghulamPage', () => {
  let component: TghulamPage;
  let fixture: ComponentFixture<TghulamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TghulamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TghulamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
