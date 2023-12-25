import React from "react";

import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

import styles from './style.module.scss'
function Input() {
    return (
        <div className={styles["shadow"]}>
            <FormControl className={styles["input-border"]} >
            <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<SearchIcon />}
                placeholder="Search Company"
            />
        </FormControl>
        </div>
        
    )
}
export default Input;