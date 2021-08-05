import './blog-card.css'

import React from 'react'
import { makeStyles, Typography, Grid, Card, CardContent, CardActions, Button, CardActionArea } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    width: "100vw",
    maxWidth: '100%'
  },
  date: {
    fontSize: '1rem',
  },
  title: {
    fontSize: '1.3rem',
    marginBottom: 12,
    wordWrap: 'normal',
    textAlign: "left"
  },
  blurb: {
    fontSize: '1rem',
    marginBottom: 12,
    wordWrap: 'normal',
    textAlign: "left"
  }
});

function BlogCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('body');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return(
    <Grid item xs={12} sm={6} md={4} lg={3} justify="center" style={{display: 'flex'}}>
      {/* Card Portion */}
      <Card variant="outlined" className={classes.root} style={{height:'100%', display: 'flex'}}>
        <CardActionArea onClick={handleClickOpen("body")}>
          <CardContent>
            <Typography className={classes.date} color="textSecondary" gutterBottom>
              {props.date}
            </Typography>
            <Typography className={classes.title} variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.blurb} color="textSecondary" variant="h5" component="h2">
              {props.blurb}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="textSecondary" disabled>
              Continue Reading...
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
      
      {/* Dialog/Pop-Up Portion */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={true}
        maxWidth="xl"
      >
        <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
        <DialogContent dividers={scroll === 'body'}>
          <DialogContentText
            id="scroll-dialog-description"
          >
            {props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default BlogCard;