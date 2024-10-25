import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneListComponent } from './rune-list.component';

describe('RuneListComponent', () => {
  let component: RuneListComponent;
  let fixture: ComponentFixture<RuneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
