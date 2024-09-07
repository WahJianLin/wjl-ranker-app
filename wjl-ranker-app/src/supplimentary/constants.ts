
export enum NAVBAR_LINKS {
  HOME = "",
  TEST = "test",
}

export const NAVBAR_LINKS_TEXT: { [key: string]: string } = {
  [NAVBAR_LINKS.HOME]: "Home",
  [NAVBAR_LINKS.TEST]: "Test",
};

export const NAVBAR_LINKS_IN_USE: string[] = [NAVBAR_LINKS.HOME, NAVBAR_LINKS.TEST];