import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProgramsPageComponent } from './manage-programs-page.component';

describe('ManageProgramsPageComponent', () => {
  let component: ManageProgramsPageComponent;
  let fixture: ComponentFixture<ManageProgramsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProgramsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProgramsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
