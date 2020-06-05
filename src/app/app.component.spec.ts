import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let appComponent: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'viafouraApp'`, () => {
    expect(appComponent.title).toEqual('viafouraApp');
  });
});
