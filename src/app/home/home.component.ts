import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    public userInfo;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        let user = this.authService.getUserInfo();
        
        if(!user) {
            this.router.navigate(['/']);
            return;
        }

        this.userInfo = user;
    }

}