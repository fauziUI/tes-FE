import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const InputDate = ({
  titel,
  selected,
  onChange,
}) => {
  return (
    <>
      <div>{titel}</div>
      <DatePicker
        showTimeSelect
        dateFormat="Pp"
        selected={selected}
        onChange={(date) => onChange(date)}
        className="my-2 w-full h-10 focus:outline-none bg-gray-100 focus:bg-violet-100 hover:bg-violet-100 rounded-lg"
      />
    </>
  );
};
