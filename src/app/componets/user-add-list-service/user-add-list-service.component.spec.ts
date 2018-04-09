import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddListServiceComponent } from './user-add-list-service.component';

describe('UserAddListServiceComponent', () => {
  let component: UserAddListServiceComponent;
  let fixture: ComponentFixture<UserAddListServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddListServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddListServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
