import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPreferencesComponent } from './dialog-preferences.component';

describe('DialogPreferencesComponent', () => {
  let component: DialogPreferencesComponent;
  let fixture: ComponentFixture<DialogPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPreferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
