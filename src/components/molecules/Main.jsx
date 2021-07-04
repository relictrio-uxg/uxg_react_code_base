import React from 'react';
import styled from 'styled-components/macro';
import { Text, Input, Button } from '../atoms';

import { device } from '../../theme';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import { connect } from "react-redux";
import DialogContent from '@material-ui/core/DialogContent';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const connectedProps = (state) => ({
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const LayoutWrapper = styled.div`
    position: relative;
`
const DialogPopup  = styled.div`
   & .MuiBackdrop-root {
       background: transparent;
   }

   & .MuiDialog-paper {
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
        padding: 4px;
        width: 400px;
        margin: 0px;
        @media ${device.tablet} {
            margin: 32px;
        }
   }
`
const HeaderDialog = styled.div`
    font-weight: 600;
    font-size: 22px;
`;

const SubHeaderDialog = styled.div`
    font-size: 16px;
    color: #010101;
`;

const AddButtonWrapper = styled.div`
    button {
        width: 100%;
        margin: auto;
        justify-content: center;
        color: #fff;
        background: #FFB41E;
        margin-top: 20px;
        box-shadow: 0px 2px 4px rgb(58 92 144 / 14%), 0px 3px 4px rgb(58 92 144 / 12%), 0px 1px 5px rgb(58 92 144 / 20%);
    }
`;

const CancelWrapper = styled.div`
    button {
        color: #C05C27;
        margin: auto;
        justify-content: center;
        background: #fff;
        margin-top: 16px;
        font-weight: 500;
    }
`;

const InputWrapper = styled.div`
    input  {
        width: 100%;
        margin-top: 12px;
        padding: 10px;
    }
`;

export const Main = (props) => {
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <LayoutWrapper>
            <div>
            <DialogPopup as={Dialog}
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                className='folder-dialog'
            >
                <DialogContent>
                <HeaderDialog>
                    <Text text={'Add Folder'}/>
                </HeaderDialog>
                <SubHeaderDialog>
                    <Text text={'Create a personal report folder'}/>
                </SubHeaderDialog>
                <InputWrapper>
                    <Input/>
                </InputWrapper>
                <div>
                    <AddButtonWrapper onClick={handleDialogClose}>
                        <Button color="primary" text={'ADD FOLDER'}/>
                    </AddButtonWrapper>
                    <CancelWrapper onClick={handleDialogClose}>
                        <Button color="primary" text={'CANCEL'}/>
                    </CancelWrapper>
                </div>
                </DialogContent>
            </DialogPopup>
            </div>
        </LayoutWrapper>
    );
};

Main.defaultProps = {
  
};

export default connector(Main);