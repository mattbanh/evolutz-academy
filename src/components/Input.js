export default function Input({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <>
      <label
        className="mb-1 text-sm font-light font-nunito uppercase text-academy-blue"
        htmlFor={name}
      >
        {label} {name === "phone" && <span className="italic">(optional)</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="mb-8 px-2 border-b-[1px] border-academy-blue text-evolutz-black focus:outline-none font-nunito font-light placeholder:italic"
      ></input>
    </>
  );
}
