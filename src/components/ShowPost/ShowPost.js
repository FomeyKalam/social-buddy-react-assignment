import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ShowComment from '../ShowComment/ShowComment';



const ShowPost = (props) => {
    const{title,id,body} = props.post ;

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
          height: 126,
        },
        img: {
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
        },
        
      }));
      const StyleTitle ={
         color : 'purple',
         fontSize : '25px'
      }
      const classes = useStyles();

     const history = useHistory();
      const handleClick=(id)=>{
            history.push(`/post/${id}`)
      }
    return (
        <div>
             <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container spacing={2}>
         
         
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography style ={StyleTitle} gutterBottom variant="subtitle1">
                  Title-{title}
                </Typography>
               <br/>
               <Typography style ={{color :'red'}} gutterBottom variant="subtitle1">
                  {body}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <Button variant="outlined" color="secondary">
                  Like
                  </Button>
                </Typography>
                <br/>
                <Grid item>
                <Button onClick ={()=>handleClick(id)} variant="contained" color="secondary">
                    see comments
                  </Button>
              </Grid>
              </Grid>
             
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
      <br/>
    
    </div>

        </div>
    );
};

export default ShowPost;