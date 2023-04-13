import Link from "next/link";

export default function NavLink({ title, path, pathname }) {
  return (
    <li className="flex items-center">
      <Link
        href={path}
        className={
          path === pathname
            ? "relative text-xs font-medium uppercase hover:text-academy-hover ease-in-out duration-150 before:absolute before:-bottom-1 before:-left-2 before:w-[1rem] before:h-[80%] before:border-b-[1px] before:border-l-[1px] before:border-academy-gold after:absolute after:-top-1 after:-left-2 after:w-4/5 after:h-[80%] after:border-t-[1px] after:border-l-[1px] after:border-academy-gold"
            : "relative text-xs font-medium uppercase hover:text-academy-hover ease-in-out duration-150"
        }
      >
        {title}
      </Link>
    </li>
  );
}
