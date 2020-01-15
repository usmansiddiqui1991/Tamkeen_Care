import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScSlidersPage } from './sc-sliders.page';

describe('ScSlidersPage', () => {
  let component: ScSlidersPage;
  let fixture: ComponentFixture<ScSlidersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScSlidersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScSlidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
