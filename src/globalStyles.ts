export const SPACING = {
  multiple: 2,
};

export const COLORS = {
  gradients: {
    purpleGradient: {
      colors: [
        "hsl(243 85% 18%)",
        "hsl(243 79% 21%)",
        "hsl(243 74% 25%)",
        "hsl(242 71% 29%)",
        "hsl(242 66% 33%)",
        "hsl(242 59% 37%)",
        "hsl(242 54% 41%)",
        "hsl(242 49% 45%)",
        "hsl(242 47% 47%)",
        "hsl(242 45% 48%)",
        "hsl(242 43% 50%)",
        "hsl(242 43% 51%)",
      ],
      locations: [
        0.01, 0.07, 0.1, 0.22, 0.3, 0.38, 0.47, 0.56, 0.65, 0.75, 0.87, 1,
      ],
      start: { x: 1, y: 1.15 },
      end: { x: 0, y: 0 },
    },
  },
};

export default {
  spacing: SPACING,
  colors: COLORS,
};
