import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoirslistComponent } from './devoirslist.component';

describe('DevoirslistComponent', () => {
  let component: DevoirslistComponent;
  let fixture: ComponentFixture<DevoirslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevoirslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoirslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
