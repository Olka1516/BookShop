export const LINK_TEMPLATES = {
  PROJECTS: () => "/",
  BASKET: () => "/basket",
  ABOUT: () => "/about",
  SIGN_IN: () => "/sign-in",
  SIGN_UP: () => "/sign-up",
  INFOBOOKS: (username: string) => `/profile/${username}`,
  ADMINPANEL: () => `/admin-panel`,
  ADMINTABLE: (id: string) => `/admin-panel/${id}`,
};
