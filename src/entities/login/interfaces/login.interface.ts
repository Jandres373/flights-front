type ActivePages = "login" | "register"

export interface LoginInitialState {
  isLoggedIn: boolean,
  activePage: ActivePages,
  justRegistered: boolean
}
