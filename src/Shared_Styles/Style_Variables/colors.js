// COLORS

export const colors = {
  background: "#3C5749d5",
  backgroundSolid: "#3C5749",
  backgroundDark: "#2d4539",
  primary: "#C5FF99",
  primaryTransparent: "#C5FF9994",
  text: "#CBF3D2",
  dark: "#000",
  navRegular: "#4d4d4e",
  accent1: "#FF93A7"
};

// RANDOM COLOR PICKER
export const randomColor = () => {
  const colorArray = ["#c3f73a", "#4AFF95", "#4AE838", "#39F7E7", "#13CDFF"];
  const randomNum = Math.floor(Math.random() * colorArray.length);
  const pick = colorArray[randomNum];
  return pick;
};

// FONTS

export const fonts = {
  title: `'Heebo', sans-serif;`,
  body: `'Open Sans', sans-serif;`
};

// MEDIA QUERY VARIABLES -- mobile-first

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
