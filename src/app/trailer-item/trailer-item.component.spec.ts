import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerItemComponent } from './trailer-item.component';

describe('TrailerItemComponent', () => {
  let component: TrailerItemComponent;
  let fixture: ComponentFixture<TrailerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
