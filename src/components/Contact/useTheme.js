import { useContext } from "react";
import { ThemeContext } from "./ThemContext";

export const useTheme = () => useContext(ThemeContext);
