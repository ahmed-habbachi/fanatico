import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'fan-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
    this.loginForm.reset();
  }

  private initForm() {
    const userEmail = '';
    const userPassword = '';

    this.loginForm = this.formBuilder.group({
      email: new FormControl(userEmail, [Validators.required, Validators.email]),
      password: new FormControl(userPassword, Validators.required)
    });
  }
}
