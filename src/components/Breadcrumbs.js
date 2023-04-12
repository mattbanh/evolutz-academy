import Link from "next/link";

const breadcrumbsExclude = [
  "/",
  "/privacy-policy",
  "/refund-policy",
  "/terms-and-conditions",
  "/terms-of-service",
];

const breadcrumbsInclude = ["/about-course", "/contact-us"];

export default function Breadcrumbs({ path }) {
  if (!breadcrumbsInclude.includes(path)) {
    return <></>;
  }

  const formatPath = (path) => {
    let pathArr = path.replace("/", "").split("-");
    let formattedPath = pathArr.join(" ");
    return formattedPath;
  };

  return (
    <section className="py-8 px-5 md:px-8 h-[5.625rem] md:h-[6.25rem]">
      <div className="mx-auto max-w-[1180px] w-full">
        <span className="uppercase text-[0.8125rem] text-academy-blue/70">
          <Link
            href="/"
            className="border-b-[1px] border-academy-blue text-academy-blue"
          >
            Home
          </Link>{" "}
          - {formatPath(path)}
        </span>
      </div>
    </section>
  );
}
