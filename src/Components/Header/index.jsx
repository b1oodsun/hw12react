import React from "react";

import { Button } from "@mui/material";

import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
import AddIcon from '@mui/icons-material/Add';

import styles from './style.module.scss'
function Header() {
    return (
        <div className={styles["header"]}>
            <div>
                <h1>Companies</h1>
                <div>
                    <Button className={styles["btn-color"]} startIcon={<FileUploadSharpIcon />}>Export</Button>
                    <Button className={styles["btn-color"]} startIcon={<FileDownloadSharpIcon />}>Import</Button>
                </div>
            </div>

            <Button variant="contained" startIcon={<AddIcon />}>
                Add
            </Button>
        </div>

    )
}
export default Header;