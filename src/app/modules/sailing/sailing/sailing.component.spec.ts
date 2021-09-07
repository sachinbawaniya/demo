import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SailingComponent } from './sailing.component';

describe('SailingComponent', () => {
  let component: SailingComponent;
  let fixture: ComponentFixture<SailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
