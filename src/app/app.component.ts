import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from './constants/language.constants';
import { APP_CONSTANTS } from './constants/app.constants';
import { ThemeService } from './core/services/themes/theme.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StorageService } from './core/services/storage/storage.service';
import { BaseComponent } from './components/shared/base/base.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class AppComponent extends BaseComponent {
  isMdMode: boolean = false;
  isCvPage = this.userState.getIsCvPage();

  constructor
    (
      private readonly translate: TranslateService,
      private readonly themeService: ThemeService,
      private readonly breakpointObserver: BreakpointObserver,
      private readonly storageService: StorageService,
      private readonly router: Router,
    ) {

    super();

    translate.addLangs([LANGUAGES.EN, LANGUAGES.FR]);

    this.breakpointObserver.observe(['(max-width: 576px)',])
      .subscribe(result => {
        this.userState.setIsPhoneSize(result.matches);
      });

    this.breakpointObserver.observe([
      `(min-width: 576px) and (max-width: 768px)`
    ])
      .subscribe(result => {
        this.isMdMode = result.matches;
      });
  }

  ngOnInit(): void {

    let currentLang = localStorage.getItem(APP_CONSTANTS.LANGUAGE_LOCAL_STORAGE)

    // Init
    this.userState.setIsPhoneMode(this.storageService.getIsPhoneMode());
    this.userState.setIsSinglePage(this.storageService.getIsSingleMode());

    if (currentLang != null)
      this.translate.setDefaultLang(currentLang);
    else this.translate.setDefaultLang(LANGUAGES.EN);

    this.themeService.initTheme();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = (event as NavigationEnd).urlAfterRedirects;
      this.userState.setIsCvPage(url.includes('/cv'));
    });;
  }
}
