"use client";
import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type TBTextEditorProps = {
  name: string;
  placeholder?: string;
};

const TBTextEditor = ({ name, placeholder }: TBTextEditorProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <ReactQuill
          {...field}
          theme="snow"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default TBTextEditor;
