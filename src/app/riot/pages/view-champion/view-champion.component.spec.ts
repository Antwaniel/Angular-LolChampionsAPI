import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChampionComponent } from './view-champion.component';

describe('ViewChampionComponent', () => {
  let component: ViewChampionComponent;
  let fixture: ComponentFixture<ViewChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChampionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
