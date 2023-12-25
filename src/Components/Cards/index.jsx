import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';

import styles from "./styles.module.scss"


const Cards = (props) => {
  return(
          <Card className={styles["card"]}>
      <CardMedia
        className={styles['image-drop']}
        image={props.image}
        title={props.title}
      />
      <CardContent >

        <Typography 
        gutterBottom variant="h5" 
        component="div">
        {props.title}
        </Typography>

          <Typography 
          variant="body1" 
          color="text.primary">
          {props.discription}
          </Typography>

          <div className={styles["additional"]}>
          <Typography 
          variant="body2" 
          color='text.secondary'>
            <AccessTimeFilledIcon /> 2hr ago</Typography>

          <Typography 
          variant="body2" 
          color='text.secondary'>
            <FileDownloadSharpIcon/>{props.downloads}</Typography>
          </div>
        
      </CardContent>
          </Card>
  )
}

export default Cards;