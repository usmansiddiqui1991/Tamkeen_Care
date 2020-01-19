import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FawadPage } from './fawad.page';

describe('FawadPage', () => {
  let component: FawadPage;
  let fixture: ComponentFixture<FawadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FawadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FawadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
