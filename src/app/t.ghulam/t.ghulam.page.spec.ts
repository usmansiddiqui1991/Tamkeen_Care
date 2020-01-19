import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T.GhulamPage } from './t.ghulam.page';

describe('T.GhulamPage', () => {
  let component: T.GhulamPage;
  let fixture: ComponentFixture<T.GhulamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T.GhulamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T.GhulamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
