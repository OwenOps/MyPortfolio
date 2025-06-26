import { Injectable } from '@angular/core';
import { MessageService as MessagePr } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor
    (
      private readonly messageService: MessagePr
    ) { }

  public showMessageSuccess(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  public showMessageError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

  public showMessageInfo(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: message });
  }

  public showMessageCreated() {
    this.showMessageSuccess("The entity has been created.")
  }

  public showMessageUpdated() {
    this.showMessageSuccess("The entity has been updated.")
  }

  public showMessageDeleted() {
    this.showMessageSuccess("The entity has been deleted.")
  }
}
