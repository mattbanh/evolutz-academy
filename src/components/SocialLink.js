import Image from "next/image";

export default function SocialLink({ href, icon, text }) {
  return (
    <div className="flex gap-2 items-center">
      <a href={href} target="_blank">
        <Image src={icon} alt="" />
      </a>
      <a
        href={href}
        target="_blank"
        className="font-nunito font-light text-sm uppercase"
      >
        {text}
      </a>
    </div>
  );
}
