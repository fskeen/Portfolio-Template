// COLORS

export const colors = {
  background: "#1c1c1c",
  primary: "#c3f73a",
  text: "#e5edcf",
  dark: "#0c0c0c"
};

// RANDOM COLOR PICKER
export const randomColor = () => {
  const colorArray = ["#c3f73a", "#4AFF95", "#4AE838", "#39F7E7", "#13CDFF"]
  const randomNum = Math.floor(Math.random() * colorArray.length)
  const pick = colorArray[randomNum]
  return pick;
}

// FONTS

export const fonts = {
  title: `'Bungee Shade', cursive;`,
  body: `'Open Sans', sans-serif;`
}