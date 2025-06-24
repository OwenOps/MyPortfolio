import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lstUser, User } from 'src/app/core/models/user';
import { BaseComponent } from '../../shared/base/base.component';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss',
  standalone: false,
})
export class FormContactComponent extends BaseComponent {
  user: User = lstUser[0];
  contactForm!: FormGroup;
  topics: string[] = [];

  constructor
    (
      private readonly fb: FormBuilder,
      private readonly storageService: StorageService
    ) { super() }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [{ value: '', disabled: this.isLoading }, Validators.required],
      email: [{ value: '', disabled: this.isLoading }, [Validators.required, Validators.email]],
      message: [{ value: '', disabled: this.isLoading }],
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      console.error("Invalid form");
      return;
    }

    const formValue = this.contactForm.value;

    const data = {
      userName: formValue.name,
      userMail: formValue.email,
      userMessage: formValue.message,
    };

    // One per person
    if (this.storageService.getIsFormSent()) {
      this.utilitiesService.getTranslatedStrings(["PREFERENCES.Form_Already_Sent"]).subscribe(translation => {
        const error = translation["PREFERENCES.Form_Already_Sent"]
        this.messageService.showMessageError(error);
        this.contactForm.reset();
      })
      return;
    }

    this.sendMail(data);
  }

  sendMail(data: any) {
    this.startLoading();

    this.utilitiesService.getTranslatedStrings(["PREFERENCES.Email_Sent_Success", "CONTACT.Email_Sent_Error"]).subscribe(translation => {
      const successMessage = translation["PREFERENCES.Email_Sent_Success"]
      const errorMessage = translation["PREFERENCES.Email_Sent_Error"];

      this.utilitiesService.sendEmail(data).then(
        () => {
          this.storageService.saveIsFormSent(true);
          this.messageService.showMessageSuccess(successMessage);
          this.contactForm.reset();
        },
        (error) => {
          this.messageService.showMessageError(errorMessage);
          console.error(error);
        }
      ).finally(() => {
        this.stopLoading();
      });
    })
  }
}
