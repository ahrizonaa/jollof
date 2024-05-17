const env = {
  dev: 'http://localhost:8080/jollof',
  prod: 'https://charmee-webservices-7sgqd.ondigitalocean.app/jollof',
};

export class Api {
  url: string;

  constructor() {
    this.url =
      location.href.match(/(localhost|127\.0\.0\.1)/i) == null
        ? env.prod
        : env.dev;
  }
}

export const api = new Api();