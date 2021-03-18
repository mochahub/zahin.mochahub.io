import { createTheme } from "react-dark-theme";
export const lightTheme = {
  background: "white",
  text: "black",
  inverseText: "white",
  highlight: "hsl(256.67, 33.33%, 58%)",
  ghCalendarThemeText: "black",
  ghCalendarThemeGrade4: "hsl(276.67, 37.5%, 30%)",
  ghCalendarThemeGrade3: "hsl(256.06, 48.97%, 44%)",
  ghCalendarThemeGrade2: "hsl(256.67, 33.33%, 58%)",
  ghCalendarThemeGrade1: "hsl(256.36, 15.49%, 72%)",
  ghCalendarThemeGrade0: "#eee",
};

export const darkTheme = {
  background: "#111111",
  text: "white",
  inverseText: "black",
  highlight: "hsl(338, 78%, 44%)",
  ghCalendarThemeText: "white",
  ghCalendarThemeGrade4: "hsl(338, 78%, 30%)",
  ghCalendarThemeGrade3: "hsl(338, 78%, 44%)",
  ghCalendarThemeGrade2: "hsl(338, 78%, 58%)",
  ghCalendarThemeGrade1: "hsl(338, 78%, 72%)",
  ghCalendarThemeGrade0: "#EEEEEE",
};

export default createTheme(darkTheme, lightTheme);
