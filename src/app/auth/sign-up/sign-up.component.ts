import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AppStateService } from 'src/app/shared/app-state.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isLoginFormEnable: boolean = false;
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public appStateSvc: AppStateService,
    private appService: AppService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
    });
  }
  ngOnInit() {

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
  isLogin() {
    if (this.appStateSvc.stateData.loginSignUpForm) this.appStateSvc.stateData.loginSignUpForm = false;
    else this.appStateSvc.stateData.loginSignUpForm = true;
  }
  onSubmit() {
    this.appService.allApi('login-register', this.loginForm.value, 'post').subscribe(res => {
      if (res.success) {
        const result = res;
        console.log('res working fine', res);

      }
    })
  }
}
