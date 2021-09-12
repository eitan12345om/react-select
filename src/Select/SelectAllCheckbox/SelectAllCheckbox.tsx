import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox
} from "react-icons/all";
import { Divider, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { OptionPropType } from "../SelectOption/SelectOption";
import { SelectAllCheckboxProps } from "./models";
import { useStyles } from "./styles";

const SelectAllCheckbox = ({options, selected, setSelected}: SelectAllCheckboxProps) => {

  const classes = useStyles();

  const allSelected = options.length === selected.length;

  function onClick() {
    if (allSelected) {
      // Deselect everything
      setSelected([]);
    } else {
      // Select everything
      setSelected(options);
    }
  }

  function getCheckbox() {
    if (allSelected) {
      return <MdCheckBox className={classes.iconAllSelected} />;
    } else if (selected.length > 0) {
      return <MdIndeterminateCheckBox className={classes.iconSomeSelected} />;
    } else {
      return <MdCheckBoxOutlineBlank className={classes.iconNoneSelected} />
    }
  }

  return (
    <div
      onClick={onClick}
      role={'option'}
      aria-selected={allSelected}
    >
      <div className={classes.content}>
        {getCheckbox()}
        <Typography
          variant={'body2'}
          color={"textPrimary"}
        >
          Select All ({options.length})
        </Typography>
      </div>
      <Divider variant={'middle'} className={classes.divider} />
    </div>
  );
};

SelectAllCheckbox.displayName = "SelectAllCheckbox";

SelectAllCheckbox.propTypes = {
  options: PropTypes.arrayOf(OptionPropType).isRequired,
  selected: PropTypes.arrayOf(OptionPropType).isRequired,
  setSelected: PropTypes.func,
};

export default SelectAllCheckbox;
