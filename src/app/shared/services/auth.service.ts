import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  // Information about user
  private userInfo;
  private localStorageUserInfo = 'userInfo';

  constructor() {
    this.userInfo = JSON.parse(localStorage.getItem(this.localStorageUserInfo));
  }

  login(params) {
    let information = {
      name: params.userName,
      email: params.email
    };

    this.userInfo = information;
    localStorage.setItem(this.localStorageUserInfo, JSON.stringify(information));
  }

  getUserInfo() {
    return this.userInfo;
  }

}
