import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { LoopBackConfig } from '../shared/sdk/index';
import { User, AccessToken }  from '../shared/sdk/models/index';
import { UserApi }            from '../shared/sdk/services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  builder: FormBuilder, private userApi: UserApi, private router: Router) { 
    LoopBackConfig.setBaseURL("http://localhost:3000");
    LoopBackConfig.setApiVersion("api");
  }

  ngOnInit() {
  }

  username: FormControl = new FormControl('',[
    Validators.required
  ]);
  password: FormControl = new FormControl('',[
    Validators.required
  ]);
  loginForm: FormGroup = this.builder.group({
    username: this.username, 
    password: this.password
  });

  submit() {
    this.userApi.login({'username':this.username.value, 'password':this.password.value}, true)
    .subscribe((user) => {
      this.router.navigate(['/board']);
    }, (err) => alert(err.message));
  }  
}
