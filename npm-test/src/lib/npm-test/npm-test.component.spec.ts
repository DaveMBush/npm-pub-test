import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NpmTestComponent } from './npm-test.component';

describe('NpmTestComponent', () => {
  let component: NpmTestComponent;
  let fixture: ComponentFixture<NpmTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpmTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NpmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
