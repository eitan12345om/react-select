import { Option } from "../SelectOption/models";

export interface SelectAllCheckboxProps {
  options: Option[],
  selected: Option[],
  setSelected: (options: Option[]) => void,
}
