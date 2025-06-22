import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lstUser, User } from 'src/app/core/models/user';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import { BaseComponent } from '../../shared/base/base.component';
import { MessageService } from 'src/app/core/services/message/message.service';

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

    this.sendMail(data);
  }

  sendMail(data: any) {
    this.startLoading();
    this.messageService.showMessageSuccess("Email envoyé avec succès.");
    this.utilitiesService.sendEmail(data).then(
      () => {
        this.messageService.showMessageSuccess("Email envoyé avec succès.");
        this.contactForm.reset();
      },
      (error) => {
        this.messageService.showMessageError('Erreur lors de l\'envoi de l\'email');
        console.error(error);
      }
    ).finally(() => {
      this.stopLoading();
    });
  }
}
