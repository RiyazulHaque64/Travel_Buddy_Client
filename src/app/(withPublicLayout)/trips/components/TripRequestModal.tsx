import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import Modal from "@/components/UI/Modal/Modal";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

type TTripRequestModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  tripId: string;
};

const TripRequestModal = ({
  open,
  setOpen,
  tripId,
}: TTripRequestModalProps) => {
  //   const { data, isLoading } = useGetUserProfileQuery({});
  //   console.log(data, isLoading);
  const handleSubmit = (values: FieldValues) => {
    console.log(values, tripId);
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Trip Request">
      <TBForm onSubmit={handleSubmit} defaultValues={{ email: "" }}>
        <TBInput name="email" label="Email" />
      </TBForm>
    </Modal>
  );
};

export default TripRequestModal;
