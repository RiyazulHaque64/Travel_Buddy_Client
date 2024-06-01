import TBFileUploader from "@/components/Forms/TBFileUploader";
import TBMultipleFileUploader from "@/components/Forms/TBMultipleFileUploader";
import { Grid } from "@mui/material";

const UploadImagesForm = () => {
  return (
    <>
      <Grid item md={6}>
        <TBFileUploader
          name="thumbnail"
          label="Thumbnail Image"
          showInUI={true}
        />
      </Grid>
      <Grid item md={6}>
        <TBMultipleFileUploader name="touristPlaceImage" />
      </Grid>
    </>
  );
};

export default UploadImagesForm;
