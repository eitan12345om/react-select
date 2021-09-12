import { Option } from "./SelectOption/models";

export interface SelectProps {
  label?: string,
  isDisabled?: boolean,
  isError?: boolean,
  isMulti?: boolean,
  noOptionsMessage?: string,
  options: Option[],
  placeholder?: string,
}
