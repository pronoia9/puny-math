import { darkTheme, lightTheme, retroTheme } from '../styles/Themes';

export function getTheme(theme) {
  switch (theme) {
    case 'dark':
      return darkTheme;
    case 'light':
      return lightTheme;
    case 'retro':
      return retroTheme;
    default:
      return darkTheme;
  }
}
