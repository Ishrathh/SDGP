import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import {Close} from '@mui/icons-material'
import { useValue } from '../context/ContextProvider';

const SetQuotaPopup = () => {
    // const {
    //     state: { isPopupOpen },
    //     dispatch,
    //   } = useValue();

    // console.log(isPopupOpen)

    // const [isPopupOpen, setIsPopupOpen] = useState(props.isPopupOpen)

    const handleClose = () => {
        // dispatch({type:'CLOSE_POPUP'})
    }

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
      >
        <DialogTitle>
            Set New Quota
            <IconButton
                sx = {{
                    position: 'absolute',
                    top:6,
                    right:6 
                }}
                onClick={handleClose}
            >
                <Close/>
            </IconButton>
        </DialogTitle>
        <DialogContent>
        <form>
            <TextField
                label="Quota"
            />
        </form>
        </DialogContent>
        
      </Dialog>
    </>
  )
}

export default SetQuotaPopup
