import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 150,
      
      
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius : '700px'
    },
  }));

const CommentDetails = (props) => {
    const{name,email,body,image} = props;
    const classes = useStyles();
    const StyleName = {
        color : '#e09915',
        fontSize : '20px'
    }
    return (
        <div>
           <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image}/>
            </ButtonBase>
          </Grid>
         
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography style ={StyleName} gutterBottom variant="subtitle1">
                  {name}
                </Typography>
               
                <Typography variant="body2" color="textSecondary">
                   {email}
                </Typography>
              </Grid>
              <Grid item>
              <Typography variant="body2" color="textSecondary">
                  {body}
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
        </div>
    );
};

export default CommentDetails;