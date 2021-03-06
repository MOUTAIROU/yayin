import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);

  console.log(props.open)

  const handleClick = () => {
    setOpen(true);
  };

  

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => props.handleClose()}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => props.handleClose()}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
  return (
    <div>
      
      <Snackbar
        open={props.open}
        autoHideDuration={6000}
        onClose={() => props.handleClose()}
        message="Enregistrement effectué avec succès"
        action={action}
      />
    </div>
  );
}