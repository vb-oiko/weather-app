import { Component, OnInit } from '@angular/core';
import { ModuleStateService } from '../../services/module-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: ModuleStateService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user) {
        this.router.navigate(['/home/city']);
      };
    });
  }

  // login() {
  //   this.auth.googleLogin().then(credential => {

  //     console.log('credential: ', credential);
  //   });
    
  // }

}
