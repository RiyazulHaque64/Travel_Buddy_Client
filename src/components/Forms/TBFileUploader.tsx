"use client";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, SxProps } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TBFileUploaderProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  showInUI?: boolean;
};

const TBFileUploader = ({
  name,
  label,
  sx,
  showInUI = false,
}: TBFileUploaderProps) => {
  const [fileName, setFileName] = useState<string | undefined>("");
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <>
          <Button
            fullWidth
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
          >
            {fileName?.length ? fileName : label}
            <input
              {...field}
              value={value?.fileName}
              onChange={(e) => {
                onChange((e.target as HTMLInputElement).files?.[0]);
                setFileName((e.target as HTMLInputElement).files?.[0]?.name);
              }}
              type="file"
              style={{ display: "none" }}
            />
          </Button>
          {showInUI && value && (
            <Box sx={{ marginTop: "20px" }}>
              <Image
                width={300}
                height={300}
                src={URL.createObjectURL(value)}
                alt={fileName || "image"}
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}
        </>
      )}
    />
  );
};

export default TBFileUploader;
