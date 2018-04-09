import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagServiceComponent } from './user-pag-service.component';

describe('UserPagServiceComponent', () => {
  let component: UserPagServiceComponent;
  let fixture: ComponentFixture<UserPagServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPagServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPagServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
