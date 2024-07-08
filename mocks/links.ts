export const LINK_TEMPLATES = {
  PROJECTS: () => "/",
  BASKET: () => "/basket",
  ABOUT: () => "/about",
  SIGN_IN: () => "/signIn",
  SIGN_UP: () => "/signUp",
  INFOBOOKS: (username: string) => `/profile/${username}`,
};
