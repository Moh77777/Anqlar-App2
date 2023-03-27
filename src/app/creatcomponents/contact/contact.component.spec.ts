import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACtComponent } from './contact.component';

describe('CONTACtComponent', () => {
  let component: CONTACtComponent;
  let fixture: ComponentFixture<CONTACtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONTACtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CONTACtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
