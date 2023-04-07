import { Text } from "./Text";

export default function ModuleCard({ module, moduleNumber }) {
  const { title, text } = module;
  return (
    <article className="w-[16.875rem] h-[16.875rem] shadow-surround bg-white font-nunito text-center px-4 align py-12">
      <h4 className="mb-3 text-[1.5rem] text-academy-gold font-semibold">
        Module {moduleNumber}
      </h4>
      <h5 className="mb-2 text-[1.3125rem] text-[#1D2939] font-extrabold">
        {title}
      </h5>
      <Text as="p" family="secondary" color="default">
        {text}
      </Text>
    </article>
  );
}
