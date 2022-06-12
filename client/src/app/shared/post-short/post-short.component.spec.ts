import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShortComponent } from './post-short.component';

describe('PostShortComponent', () => {
  let component: PostShortComponent;
  let fixture: ComponentFixture<PostShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
