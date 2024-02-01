import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 loginobj:any={
  UserName:'',
  password:'',
 };  
 constructor(private router: Router, 
  private ngZone: NgZone) {}
//translate to hindi


onLogin(){
if(this.loginobj.UserName =='Admin' && 
this.loginobj.password =='12345'){
  this.ngZone.run(() => {
    this.router.navigateByUrl('/products');
  });
  alert('Successfully logged in');
}
else{
  alert('Please enter correct password');
}
}
}

