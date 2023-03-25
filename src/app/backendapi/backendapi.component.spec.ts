import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendapiComponent } from './backendapi.component';

describe('BackendapiComponent', () => {
  let component: BackendapiComponent;
  let fixture: ComponentFixture<BackendapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
