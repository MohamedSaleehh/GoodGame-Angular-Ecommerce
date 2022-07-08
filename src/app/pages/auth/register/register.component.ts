import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirmedValidator.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register = this.fb.group(
    {
      firstName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      lastName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required, Validators.pattern(/^(?=.{4,20}$)(?![0-9])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
          ),
        ],
      ],
      confirmPassword: ["", [Validators.required]],
    },
    {
      validator: ConfirmedValidator("password", "confirmPassword"),
    }
  );
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  show() {
    console.log(this.register);
  }

}
