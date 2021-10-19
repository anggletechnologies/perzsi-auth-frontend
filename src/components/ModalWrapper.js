import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import pt from 'prop-types'


function ModalWrapper({open,setOpen,children}) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog  open={open} onClose={handleClose}>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>
    
  );
}

ModalWrapper.defaultProps = {
    open:false,
    setOpen:()=>null,
    children:null
}

ModalWrapper.propTypes = {
    open:pt.bool.isRequired,
    setOpen:pt.func.isRequired,
    children:pt.any.isRequired
}




export default ModalWrapper