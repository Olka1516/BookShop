export const LINK_TEMPLATES = {
  HOME: () => "/",
  BASKET: () => "/basket",
  ABOUT: () => "/",
  CATEGORIES: () => "/",
  DETAILSBOOK: (id: string) => `/details/${id}`,
  SIGN_IN: () => "/sign-in",
  SIGN_UP: () => "/sign-up",
  INFOBOOKS: (username: string) => `/profile/${username}`,
  ADMINPANEL: () => `/admin-panel`,
  ADMINTABLE: (id: string) => `/admin-panel/${id}`,
  ADMINUPDATEBOOK: (id: string) => `/admin-panel/update-book/${id}`,
};
