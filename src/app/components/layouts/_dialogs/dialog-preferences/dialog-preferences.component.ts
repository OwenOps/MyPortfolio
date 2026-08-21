import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { BaseComponent } from 'src/app/components/shared/base/base.component';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { ThemeOption, ThemeService } from 'src/app/core/services/themes/theme.service';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlagsComponent } from '../../flags/flags.component';
import { FormContactComponent } from '../../form-contact/form-contact.component';

@Component({
  selector: 'app-dialog-preferences',
  templateUrl: './dialog-preferences.component.html',
  styleUrl: './dialog-preferences.component.scss',
  imports: [SharedModule, PrimengModule, FlagsComponent, FormContactComponent]
})
export class DialogPreferencesComponent extends BaseComponent {
  themes: ThemeOption[] = [];
  selectedTheme = '';
  activeTab: 'settings' | 'contact' = 'settings';

  constructor
    (
      private readonly themeService: ThemeService,
      private readonly storageService: StorageService,
      private readonly router: Router
    ) {
    super();
  }

  ngOnInit(): void {
    this.themes = this.themeService.getThemes();
    this.selectedTheme = this.themeService.getSelectedTheme();
  }

  onThemeChange(theme: ThemeOption): void {
    this.selectedTheme = theme.value;
    this.themeService.setTheme(theme.value);
  }

  setProMode(event: CheckboxChangeEvent) {
    if (this.isUserAdmin == null)
      return;

    this.userState.setIsPro(event.checked);
    this.storageService.saveIsPro(event.checked);

    const currentUrl = this.router.url.split('/')[1];
    this.utilitiesService.goToAPage(`/${currentUrl}/${event.checked}`)
  }

  setSinglePage(event: CheckboxChangeEvent) {
    this.userState.setIsSinglePage(event.checked);
    this.storageService.saveIsSinglePage(event.checked);

    if (event.checked)
      this.utilitiesService.goToAPage(`portfolio/${this.isPro}`)
    else this.utilitiesService.goToAPage('/');
  }

  setPhoneMode(event: CheckboxChangeEvent) {
    this.userState.setIsPhoneMode(event.checked);
    this.storageService.saveIsPhoneMode(event.checked);
  }
}
