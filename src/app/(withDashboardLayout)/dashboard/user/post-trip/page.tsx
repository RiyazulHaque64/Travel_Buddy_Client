"use client";
import TBForm from "@/components/Forms/TBForm";
import TBTextEditor from "@/components/Forms/TBTextEditor";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";

const PostTripPage = () => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <TBForm onSubmit={handleSubmit}>
      <TBTextEditor name="tripDescription" />
      <Button type="submit">Submit</Button>
    </TBForm>
  );
};

export default PostTripPage;
