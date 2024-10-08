import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgStyle, JsonPipe } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { FormLabelDirective, FormFeedbackComponent, ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular-pro';
import { ValidationFormsService } from '@shared/libs/forms/validation.service';
import { authService } from '@shared/libs/auth/auth.service';
import { AlertsComponent, LoadingComponent } from '@workspace/panel/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ValidationFormsService],
  standalone: true,
  imports: [CommonModule, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, ReactiveFormsModule, FormsModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle, TranslateModule, LoadingComponent]
})
export class LoginComponent implements OnInit {


  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];

  constructor(
    private auth$: authService,
    private router: Router,
    private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService
  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  ngOnInit(): void { }

  onSubmit() {
   
    if (this.onValidate()) {

      const data = {
        email: this.simpleForm.value.email as string,
        password: this.simpleForm.value.password as string,
      };
     
      this.auth$.login(data).subscribe({
        next: () => {
          //TODO: se risposta non ha role di accesso deve apparire notifica che i dati sono corretti ma non ha autorizzazione
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          //TODO: gestire errori con notifiche in base al codice errore
          alert(error.message);
        }
      });

    }
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.simpleForm.status === 'VALID';
  }

  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['',
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin)
          ]
        ],
      }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }


}

//TODO: la funzione [valid] degli input è sempre uguale, metterla in un servizio