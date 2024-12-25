import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.farmsmart.app',
  appName: 'FarmSmart',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#2C1810',
      showSpinner: true,
      spinnerColor: '#E6B17E'
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#2C1810'
    }
  }
};

export default config;