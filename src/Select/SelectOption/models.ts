export interface Option {
  label: string | number,
  value: string | number,
}

export interface SelectOptionProps {
  onSelectOption: (option: Option) => void;
  option: Option,
  selected: boolean,
}
