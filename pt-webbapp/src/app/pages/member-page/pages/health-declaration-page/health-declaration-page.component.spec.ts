import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDeclarationPageComponent } from './health-declaration-page.component';

describe('HealthDeclarationPageComponent', () => {
  let component: HealthDeclarationPageComponent;
  let fixture: ComponentFixture<HealthDeclarationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDeclarationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDeclarationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
