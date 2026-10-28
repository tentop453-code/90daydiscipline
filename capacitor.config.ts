import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.julkornine.discipline',
  appName: '90 Day Discipline',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' },
}

export default config
