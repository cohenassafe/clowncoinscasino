// Global type declarations for analytics and external libraries

declare global {
  interface Window {
    gtag: (command: string, action: string, parameters?: any) => void;
    ga: (command: string, ...args: any[]) => void;
  }
}

export {};
