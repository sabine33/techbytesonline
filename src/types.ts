export interface App {
  title: string;
  description: string;
  link: string;
}

export interface Config {
  companyName: string;
  tagline: string;
  developers: string[];
  apps: App[];
}
