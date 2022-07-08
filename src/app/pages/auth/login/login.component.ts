import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.{4,20}$)(?![0-9])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
        ),
      ],
    ],
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  show() {
    console.log(this.login);
  }
}
