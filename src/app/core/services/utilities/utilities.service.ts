import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { LANGUAGES } from 'src/app/constants/language.constants';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor
    (
      private readonly router: Router,
      private readonly translateService: TranslateService,
      private readonly dialogService: DialogService
    ) { }

  goToAPage(route: string): void {
    this.router.navigate([route]);
  }

  changeSiteLanguage(language: string) {
    this.translateService.setDefaultLang(language ?? LANGUAGES.FR);
    window.localStorage.setItem(APP_CONSTANTS.LANGUAGE_LOCAL_STORAGE, language);
  }

  public openDialog(component: any, header?: string, data: any = {}): DynamicDialogRef {
    const ref = this.dialogService.open(component, {
      header: header,
      modal: true,
      focusOnShow: false,
      style: { width: '50vw' },
      breakpoints: { '1199px': '75vw', '575px': '90vw' },
      contentStyle: { overflow: 'auto', 'text-align': 'center' },
      baseZIndex: 10000,
      closable: true,
      styleClass: 'custom-dialog',
      data: {
        ...data
      }
    });

    return ref;
  }

  public closeDialog(ref: DynamicDialogRef) {
    ref.close();
  }

  sendEmail(data: { userName: string; userMail: string; topic: string; userMessage: string; userPhone: string }) {
    return emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      data,
      environment.emailjs.userId
    );
  }

  getTranslatedStrings(keys: string[]): Observable<{ [key: string]: string }> {
    return this.translateService.get(keys);
  }
}
