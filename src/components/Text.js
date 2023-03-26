// Used for body, overline, list, statement
export function Text({
  as: Component = "span",
  className,
  color = "default",
  size = "body",
  family = "primary",
  children,
  ...props
}) {
  // colours created in tailwind config file
  const colors = {
    default: "text-evolutz-black",
    primary: "text-academy-blue",
    accent: "text-academy-gold",
    bright: "text-white",
  };

  const sizes = {
    body: "text-base leading-5",
    overline: "font-medium uppercase text-[0.9375rem]",
    list: "font-semibold text-lg",
    statement: "font-bold uppercase text-xs md:text-base",
    bodySub: "text-sm md:text-[0.9375rem]",
    button: "font-semibold uppercase text-sm",
    breadCrumb: "uppercase text-[0.8125rem]",
    label: "font-light uppercase text-sm",
    footer: "font-light uppercase text-xs",
  };
  // primary font defined in globals body selector
  const fontFamily = {
    primary: "",
    secondary: "font-nunito",
  };
  // concat className
  const styles = `${colors[color]} ${sizes[size]} ${fontFamily[family]} ${className}`;

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  );
}

export function Heading({
  as: Component = "h2",
  children,
  className = "",
  color = "primary",
  format,
  size = "section",
  family = "primary",
  ...props
}) {
  const colors = {
    default: "text-evolutz-black",
    primary: "text-academy-blue",
    accent: "text-academy-gold",
    bright: "text-white",
  };
  const sizes = {
    // Only on homepage
    page: "font-bold text-4xl md:text-[3.3125rem] leading-[2.75rem] md:leading-[4.0625rem] ",
    sectionXl: "font-semibold uppercase text-[2.5rem] md:text-[4.4375rem]",
    sectionLg: "font-semibold uppercase text-xl md:text-[3.4375rem]",
    // sectionLg: "",
    // Other pages
    aboutPage: "font-semibold uppercase text-[2.5rem] md:text-[3.125rem]",
    section: "font-semibold uppercase text-[1.9375rem] md:text-[3.125rem]",
    // Global
    sectionSub: "font-bold text-xl md:text-[1.6875rem]",
    footer: "font-medium uppercase text-sm",
  };
  // primary font defined in globals body selector
  const fontFamily = {
    primary: "",
    secondary: "font-nunito",
  };
  // concat className
  const styles = `${colors[color]} ${sizes[size]} ${fontFamily[family]} ${className}`;

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  );
}
