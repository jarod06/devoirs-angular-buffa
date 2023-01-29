import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoirsaddComponent } from './devoirsadd.component';

describe('DevoirsaddComponent', () => {
  let component: DevoirsaddComponent;
  let fixture: ComponentFixture<DevoirsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevoirsaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoirsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
