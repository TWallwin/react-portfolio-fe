import { useMediaQuery } from "react-responsive";

export const useDesktopMediaQuery = () => useMediaQuery({ query: "(min-width: 901px)" })