import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User, AccessToken }  from '../shared/sdk/models/index';
import { UserApi }            from '../shared/sdk/services/index';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private  builder: FormBuilder,  private userApi: UserApi,  private router: Router) { }

  ngOnInit() {
  }

  username: FormControl = new FormControl('',[
    Validators.required
  ]);
  password: FormControl = new FormControl('',[
    Validators.required
  ]);
  mail: FormControl = new FormControl('',[
    Validators.required
  ]);
  registerForm: FormGroup = this.builder.group({
    username: this.username, 
    password: this.password,
    mail: this.mail
  });

  submit() {
    this.userApi.create({'username':this.username.value, 'password':this.password.value, 'email': this.mail.value})
    .subscribe((user) => {
      this.router.navigate(['/board']);
    }, (err) => alert(err.message));
    
}  

}
