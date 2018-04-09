import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewListServiceComponent } from './user-view-list-service.component';

describe('UserViewListServiceComponent', () => {
  let component: UserViewListServiceComponent;
  let fixture: ComponentFixture<UserViewListServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewListServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewListServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
