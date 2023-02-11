import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AppStateService } from 'src/app/shared/app-state.service';
import { AppService } from 'src/app/app.service';
import { BehaviorService } from 'src/app/shared/behavior.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isLoginFormEnable: boolean = false;
  loginForm!: FormGroup;
  loginCodeForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  codeSendSuccessfully: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public appStateSvc: AppStateService,
    private appService: AppService,
    private _bs: BehaviorService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
    });
    this.loginCodeForm = this.formBuilder.group({
      loginCode: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', []]
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
    if (!this.codeSendSuccessfully) {
      this.appService.allApi('login-register', this.loginForm.value, 'post').subscribe(res => {
        if (res.success) {
          const result = res;
          this.codeSendSuccessfully = true;
          console.log('res working fine', res);
        }
      })
    } else {
      this.loginCodeForm.patchValue({
        email: this.loginForm.value.email
      })
      this.appService.allApi('login', this.loginCodeForm.value, 'post').subscribe(res => {
        if (res.success) {
          const result = res.data;
          this._bs.setUserData(result)
          this.loginForm.reset();
          this.appStateSvc.stateData.userData = res.data;
          console.log(this.appStateSvc.stateData);
          this.router.navigate(['/']);
          console.log('login code working fine', res);
        }
      })
    }
  }
}
