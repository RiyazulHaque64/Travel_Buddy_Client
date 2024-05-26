import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, Input, SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TBFileUploaderProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

const TBFileUploader = ({ name, label, sx }: TBFileUploaderProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <Button
          fullWidth
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ ...sx }}
        >
          {label}
          <Input
            {...field}
            value={value?.fileName}
            onChange={(e) =>
              onChange((e.target as HTMLInputElement).files?.[0])
            }
            type="file"
            sx={{ display: "none" }}
          />
        </Button>
      )}
    />
  );
};

export default TBFileUploader;
