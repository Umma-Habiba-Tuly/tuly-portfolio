export const THEME_CONFIG = {
  containerMaxWidth: {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  },
  sectionPadding: {
    default: "py-16 md:py-24 lg:py-32",
    compact: "py-12 md:py-16",
  },
  statusColors: {
    active: "bg-emerald-500",
    available: "bg-emerald-400",
    busy: "bg-amber-400",
    offline: "bg-slate-500",
  },
} as const;
