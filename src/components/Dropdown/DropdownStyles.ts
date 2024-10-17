import { styles } from "../../constants/styles";

export const DropdownStyles = {
  btn(id: string, activeID: string | null): React.CSSProperties {
    if (activeID === id) {
      return {
        backgroundColor: styles.colors.blue,
        color: styles.colors.white,
      };
    }
    return {
      backgroundColor: styles.colors.white,
      color: styles.colors.black,
    };
  },
  arrow(id: string, activeID: string | null): React.CSSProperties {
    if (activeID === id) {
      return {
        transform: "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
    }
    return {
        transform: "rotate(-90deg)",
        transition: "transform 0.3s ease",
        color: styles.colors.blue
    }
  },
  div(id: string, activeID: string | null): React.CSSProperties {
    if (activeID === id) {
      return {
        opacity: 100,
        pointerEvents: "auto",
      };
    }
    return {
      opacity: 0,
      pointerEvents: "none",
    };
  },
};
