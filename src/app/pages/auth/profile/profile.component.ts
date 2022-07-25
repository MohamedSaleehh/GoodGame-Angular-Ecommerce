import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  errorMessage:string = ''
  editForm = this.fb.group(
    {
      firstName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      lastName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      email: ["", [Validators.required, Validators.pattern(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)]],
      username: ["", [Validators.required, Validators.pattern(/^(?=.{4,20}$)(?![0-9])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)]],
    }
  );
  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe((res:any)=>{
      this.editForm.patchValue({firstName:res.firstName,
        lastName:res.lastName,
        email:res.email,
        username:res.username})
      
    })
   }
   
  ngOnInit(): void {
  }
  update(){
    const user:User = {
      username:this.editForm.controls['username'].value!,
      firstname:this.editForm.controls['firstName'].value!,
      lastname:this.editForm.controls['lastName'].value!,
      email:this.editForm.controls['email'].value!,
    }
     this.authService.update(user).subscribe(res=>{
      this.errorMessage = 'Saved'
    },
    err=>{
      console.log(err.error.code);
      
      if(err.error.code == 11000){
        this.errorMessage = Object.keys(err.error.keyValue)[0] + ' already exists'
      }
    }
     )
    
  }

  show() {
    console.log(this.editForm);
  }

}
