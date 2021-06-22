export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--ion-color-primary': '#3880ff',
    '--ion-text-color': '#000',
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--ion-color-primary': '#080808',
    '--ion-text-color': '#FFA500',
  }
};
