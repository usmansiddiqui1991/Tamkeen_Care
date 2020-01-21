import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScSelectServicePage } from './sc-select-service.page';

describe('ScSelectServicePage', () => {
  let component: ScSelectServicePage;
  let fixture: ComponentFixture<ScSelectServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScSelectServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScSelectServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
