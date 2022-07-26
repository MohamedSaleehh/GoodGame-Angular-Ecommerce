import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = ''
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
    remember:[false]
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {

  }

  ngOnInit(): void {}
  authenticate(){
    this.errorMessage = ""
    this.authService.login(this.login.controls.username.value as string,this.login.controls.password.value as string, this.login.controls.remember.value as boolean).subscribe(
      res=>{
        localStorage.setItem("token",(res as any).token)
        localStorage.setItem("user_info",JSON.stringify((res as any).user_info))
        this.authService.setLoggedIn(true)
        this.router.navigate(['/'])
      },
      err=>{
        
        this.errorMessage = 'Wrong username or password'
      }

    )
  }
  show() {
    console.log(this.login);
  }
}
