import { Directive, effect, inject } from '@angular/core';
import { MessageService } from 'src/app/core/services/message/message.service';
import { UserStateService } from 'src/app/core/services/user-state/user-state.service';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Directive({
  selector: 'app-base',
})
export abstract class BaseComponent {

  protected readonly userState = inject(UserStateService);
  protected readonly messageService = inject(MessageService);
  protected readonly utilitiesService = inject(UtilitiesService);

  isLoading: boolean = false;
  isUserAdmin: boolean = false;
  isPro: boolean = false;
  isPhoneMode: boolean = false;
  isPhoneSize: boolean = false;
  isSinglePage: boolean = false;
  isCvPage: boolean = false;

  constructor() {
    effect(() => {
      this.isPro = this.userState.getIsPro()();
      this.isUserAdmin = this.userState.getIsUserAdmin()();
      this.isPhoneMode = this.userState.getIsPhoneMode()();
      this.isPhoneSize = this.userState.getIsPhoneSize()();
      this.isSinglePage = this.userState.getIsSinglePage()();
      this.isCvPage = this.userState.getIsCvPage()();
    });
  }

  protected startLoading() { this.isLoading = true; }

  protected stopLoading() { this.isLoading = false; }
}
