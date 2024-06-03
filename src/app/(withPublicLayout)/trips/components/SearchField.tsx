import SearchIcon from "@mui/icons-material/Search";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const SearchField = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 2, mr: 1, flex: 1 }}
        placeholder="Search your trips"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Paper>
  );
};

export default SearchField;
