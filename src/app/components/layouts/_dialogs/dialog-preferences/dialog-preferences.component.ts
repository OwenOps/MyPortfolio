import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { BaseComponent } from 'src/app/components/shared/base/base.component';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { ThemeService } from 'src/app/core/services/themes/theme.service';

@Component({
  selector: 'app-dialog-preferences',
  templateUrl: './dialog-preferences.component.html',
  styleUrl: './dialog-preferences.component.scss',
  standalone: false
})
export class DialogPreferencesComponent extends BaseComponent {
  themes!: any;

  selectedTheme!: string;
  selectedIndex: number = 0;

  constructor
    (
      private readonly themeService: ThemeService,
      private readonly storageService: StorageService,
      private readonly router: Router
    ) {
    super();
    this.themes = themeService.getThemes();
  }

  ngOnInit(): void {
    this.selectedTheme = this.themeService.getSelectedTheme();
  }

  onThemeChange(index: number): void {
    const selected = this.themes[index].value;
    this.selectedTheme = selected;
    this.themeService.setTheme(selected);
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
