export default function Input({ label, name, type }) {
  return (
    <>
      <label
        className="mb-1 text-sm font-light font-nunito uppercase text-academy-blue"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="mb-8 px-2 border-b-[1px] border-academy-blue text-evolutz-black focus:outline-none font-nunito"
      ></input>
    </>
  );
}
