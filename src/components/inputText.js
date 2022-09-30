export const InputText = ({
  titel,
  name,
  placeholder,
  value,
  autoFocus,
  onChange,
}) => {
  return (
    <>
      <div>{titel}</div>
      <input
        className="my-2 w-full h-10 focus:outline-none bg-gray-100 focus:bg-violet-100 hover:bg-violet-100 rounded-lg pl-2"
        type='text'
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus ? true : false}
      />
    </>
  );
};
