import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/all";
import cx from 'classnames';
import { ClickAwayListener, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { SelectProps } from "./models";
import { Option } from "./SelectOption/models";
import { SelectOption } from "./SelectOption";
import { OptionPropType } from "./SelectOption/SelectOption";
import { SelectAllCheckbox } from "./SelectAllCheckbox";

const Select = ({ label, isDisabled, isError, isMulti, noOptionsMessage, options, placeholder }: SelectProps) => {

  const classes = useStyles();

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option[]>([]);

  function onSelectOption(option: Option) {
    if (isMulti) {
      if (selected.includes(option)) {
        // Remove the option if it's already been selected
        setSelected(prevSelected => prevSelected.filter(o => o !== option));
      } else {
        // Add the new option
        setSelected(prevSelected => [...prevSelected, option]);
      }
    } else {
      if (selected.includes(option)) {
        setSelected([]);
      } else {
        setSelected([option]);
      }
      setDropdownOpen(false);
    }
  }

  return (
    <div
      className={classes.container}
      aria-disabled={isDisabled}
      aria-label={label || 'unlabeled select'}
    >
      <div>
        <Typography variant={'caption'} color={isError ? 'error' : "textSecondary"}>{label}</Typography>
        <div
          className={cx(
            classes.header,
            {
              [classes.headerDisabled]: isDisabled && !isError,
              [classes.headerEnabled]: !isDisabled && !isError,
              [classes.headerError]: isError,
            }
          )}
          onClick={isDisabled ? undefined : () => setDropdownOpen(prev => !prev)}
          tabIndex={isDisabled ? -1 : 0}
        >
          <Typography
            className={classes.selectedValues}
            variant={'body2'}
            color={selected.length > 0 ? "textPrimary" : "textSecondary"}
          >
            {selected.map(option => option.label).join(', ') || placeholder}
          </Typography>

          {dropdownOpen ? (
            <MdKeyboardArrowUp className={classes.dropdownIcon} />
          ) : (
            <MdKeyboardArrowDown className={classes.dropdownIcon}/>
          )}
        </div>
      </div>

      {dropdownOpen && (
        <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
          <div className={classes.dropdown} role={'listbox'}>
            {isMulti && options.length > 0 && (
              <SelectAllCheckbox
                options={options}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            {options.length > 0 ? (
              options.map((option) => (
                <SelectOption
                  key={option.value}
                  option={option}
                  onSelectOption={() => onSelectOption(option)}
                  selected={selected.includes(option)}
                />
              ))
            ) : (
              <Typography
                variant={'body2'}
                color={'textPrimary'}
                className={classes.noOptionsMessage}
              >
                {noOptionsMessage}
              </Typography>
            )}
          </div>
        </ClickAwayListener>
      )}

    </div>
  );
};

Select.displayName = "Select";

Select.defaultProps = {
  isDisabled: false,
  isError: false,
  isMulti: false,
  noOptionsMessage: 'No results found.',
  placeholder: 'Select one',
};

Select.propTypes = {
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isError: PropTypes.bool,
  isMulti: PropTypes.bool,
  noOptionsMessage: PropTypes.string,
  options: PropTypes.arrayOf(OptionPropType).isRequired,
  placeholder: PropTypes.string,
};

export default Select;
