"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { toggleModal } from "@/lib/features/modal";
import { SxProps, styled } from "@mui/material/styles";

const style = ({ height, width }: { height?: String; width?: String }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.modal",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height,
  width,
});

const ModalWrapper = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export default function BasicModal({
  modalTitle,
  modalBody,
  height,
  width,
}: {
  modalTitle?: string;
  height?: string;
  width?: string;
  modalBody: any;
}) {
  const open = useAppSelector((state) => state.modal.isModalOpen);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(toggleModal(false));

  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Box sx={style({ height, width }) as SxProps}>
          {modalTitle && <ModalWrapper>{modalTitle}</ModalWrapper>}
          <ModalWrapper id="modal-modal-description" sx={{ mt: 2 }}>
            {modalBody()}
          </ModalWrapper>
        </Box>
      </Modal>
    </div>
  );
}
