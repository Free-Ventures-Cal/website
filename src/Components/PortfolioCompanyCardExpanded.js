import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './../styles/Portfolio.css';
import './../styles/App.css';


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function CustomizedDialogs(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      props.clearSelectedCompany();
    };

    let linkSection;

    if(props.company.links) {
        let links = props.company.links.map((link) => {
            return (<a href={link.address} target="_blank">{link.title}</a>);
        })

        linkSection = (
            <DialogActions>
                <span className="linkSection">
                    <p>Links</p>
                    {links}
                </span>
            </DialogActions>
        );
    }

    let logo;
    if(props.company.logo) {
        logo = <img src={props.company.logo} />;
    }

    let tags;

    if(props.company.tags) {
        tags = props.company.tags.map((tag) => {
            const tagStyle = {
                backgroundColor: tag.backgroundColor
            };

            return (<span className="companyTag" style={tagStyle}>
                        {tag.content}
                    </span>);
        });
    }

    let photos;

    if(props.company.photos) {
        photos = props.company.photos.map((photo) => {
            return (<img className="companyPhoto" src={photo.src} alt="" />);
        })
    }

  return (
    <div>
      <Dialog className="dialog" onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {logo}
          <h1>{props.company.name}</h1>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.company.description}
          </Typography>
          {tags}
          {photos}
        </DialogContent>
        {linkSection}
      </Dialog>
    </div>
  );
}

export default CustomizedDialogs;
