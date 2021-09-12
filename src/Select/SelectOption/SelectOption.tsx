import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { SelectOptionProps } from "./models";
import { useStyles } from "./styles";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/all";

const SelectOption = ({onSelectOption, option, selected}: SelectOptionProps) => {

  const classes = useStyles();

  return (
    <div
      className={classes.dropdownItem}
      key={option.value}
      onClick={() => onSelectOption(option)}
      role={'option'}
      aria-disabled={false}
      aria-selected={selected}
    >
      {selected ? (
        <MdCheckBox className={classes.dropdownItemIconSelected} />
      ) : (
        <MdCheckBoxOutlineBlank className={classes.dropdownItemIcon} />
      )}
      <Typography variant={'body2'} color={"textPrimary"}>{option.label}</Typography>
    </div>
  );
};

SelectOption.displayName = "SelectOption";

export const OptionPropType = PropTypes.shape({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}).isRequired;

SelectOption.propTypes = {
  onSelectOption: PropTypes.func.isRequired,
  option: OptionPropType,
  selected: PropTypes.bool.isRequired,
};

export default SelectOption;
