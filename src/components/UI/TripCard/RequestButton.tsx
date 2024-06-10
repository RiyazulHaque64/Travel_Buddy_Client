"use client";

import TripRequestModal from "@/app/(withPublicLayout)/trips/components/TripRequestModal";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { useState } from "react";

const RequestButton = ({ id }: { id: string }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        size="small"
        color="primary"
        fullWidth
        endIcon={<SendIcon />}
        onClick={() => setModalOpen(true)}
      >
        Request Trip
      </Button>
      <TripRequestModal open={modalOpen} setOpen={setModalOpen} tripId={id} />
    </>
  );
};

export default RequestButton;
