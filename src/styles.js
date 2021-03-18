import { createTheme } from "react-dark-theme";
export const lightTheme = {
  background: "white",
  text: "black",
  highlight: "#e963a6",
  ghCalendarThemeText: "black",
  ghCalendarThemeGrade4: "hsl(338, 78%, 30%)",
  ghCalendarThemeGrade3: "hsl(338, 78%, 44%)",
  ghCalendarThemeGrade2: "hsl(338, 78%, 58%)",
  ghCalendarThemeGrade1: "hsl(338, 78%, 72%)",
  ghCalendarThemeGrade0: "#eee",
};

export const darkTheme = {
  background: "#111111",
  text: "white",
  highlight: "#e963a6",
  ghCalendarThemeText: "white",
  ghCalendarThemeGrade4: "hsl(338, 78%, 30%)",
  ghCalendarThemeGrade3: "hsl(338, 78%, 44%)",
  ghCalendarThemeGrade2: "hsl(338, 78%, 58%)",
  ghCalendarThemeGrade1: "hsl(338, 78%, 72%)",
  ghCalendarThemeGrade0: "#eee",
};

export default createTheme(darkTheme, lightTheme);
