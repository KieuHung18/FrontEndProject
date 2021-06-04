import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouUSComponent } from './abou-us.component';

describe('AbouUSComponent', () => {
  let component: AbouUSComponent;
  let fixture: ComponentFixture<AbouUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
