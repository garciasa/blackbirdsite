import MenuLogo from './extensions/logo.png';

export default {
  config: {
    auth: {
      logo: MenuLogo,
    },
    locales: [],
    menu: {
      logo: MenuLogo,
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'BlackBird-Cultur Lab',
        'Auth.form.welcome.subtitle': 'Log in to your account',
      },
    },
  },
  bootstrap(app) {},
};
