import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';

export interface ThemeOption {
  value: string;
  label: string;
  swatch: string;
  accent: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private selectedTheme: string = "";

  private readonly themes: ThemeOption[] = [
    { value: 'brown', label: 'Theme_Brown', swatch: '#6E3B1F', accent: '#FF4301' },
    { value: 'light', label: 'Theme_Light', swatch: '#f5f5f5', accent: '#aaaaaa' },
    { value: 'green', label: 'Theme_Green', swatch: '#004d40', accent: '#00FF00' },
    { value: 'blue', label: 'Theme_Blue', swatch: '#1b263b', accent: '#00BFFF' },
    { value: 'gray', label: 'Theme_Gray', swatch: '#393E46', accent: '#00ADB5' },
    { value: 'red', label: 'Theme_Red', swatch: '#3D0000', accent: '#FF5733' },
    { value: 'purple', label: 'Theme_Purple', swatch: '#52057B', accent: '#9B30FF' },
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
