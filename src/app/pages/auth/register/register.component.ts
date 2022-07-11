import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmedValidator } from '../confirmedValidator.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage:string = ''
  register = this.fb.group(
    {
      firstName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      lastName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      email: ["", [Validators.required, Validators.pattern(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)]],
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
  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticate(){
    this.authService.register(this.register.controls['firstName'].value,
                              this.register.controls['lastName'].value,
                              this.register.controls['username'].value ,
                              this.register.controls['email'].value,
                              this.register.controls['password'].value,).subscribe(
                                
      res=>{
          localStorage.setItem("token",(res as any).token)
          localStorage.setItem("user_info",JSON.stringify((res as any).user_info))
          this.authService.setLoggedIn(true)
          this.router.navigate(['/'])

      },
      err=>{
        if(err.error.code == 11000){
          this.errorMessage = Object.keys(err.error.keyValue)[0] + ' already exists'
        }
      }
      )
  }
  show() {
    console.log(this.register);
  }

}
