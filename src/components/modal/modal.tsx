'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { toggleModal } from '@/lib/features/modal';
import { styled } from "@mui/material/styles";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalWrapper = styled("div")(({ theme }) => ({
    color: theme.palette.text.primary,
}));

export default function BasicModal({ modalTitle, modalBody }: { modalTitle: string, modalBody: any }) {
    const open = useAppSelector((state) => state.modal.isModalOpen);
    const dispatch = useAppDispatch();
    const handleClose = () => dispatch(toggleModal(false));

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalWrapper>
                        {modalTitle}
                    </ModalWrapper>
                    <ModalWrapper id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalBody()}
                    </ModalWrapper>
                </Box>
            </Modal>
        </div>
    );
}
