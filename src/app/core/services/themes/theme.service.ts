import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private selectedTheme: string = "";

  private readonly themes = [
    { value: 'brown', label: 'Theme_Brown' },
    { value: 'light', label: 'Theme_Light' },
    { value: 'green', label: 'Theme_Green' },
    { value: 'blue', label: 'Theme_Blue' },
    { value: 'gray', label: 'Theme_Gray' },
    { value: 'red', label: 'Theme_Red' },
    { value: 'purple', label: 'Theme_Purple' },
  ];

  constructor() { }

  initTheme() {
    const savedTheme = localStorage.getItem(APP_CONSTANTS.THEME) || APP_CONSTANTS.DEFAULT_THEME;
    this.selectedTheme = savedTheme;
    this.setTheme(savedTheme);
  }

  setTheme(theme: string): void {
    const body = document.body;

    body.classList.remove(
      'theme-brown', 
      'theme-light', 
      'theme-green', 
      'theme-blue', 
      'theme-gray', 
      'theme-red', 
      'theme-purple'
    );
    body.classList.add(`theme-${theme}`);

    this.selectedTheme = theme;
    localStorage.setItem(APP_CONSTANTS.THEME, theme);
  }

  getThemes() {
    return this.themes;
  }

  getSelectedTheme(): string {
    return this.selectedTheme || APP_CONSTANTS.DEFAULT_THEME;
  }
}
