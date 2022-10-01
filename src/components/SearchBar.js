import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "../axios";
import "../index.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function SearchBar(props) {
  const [tag, setTag] = useState("");
  const { setData, searchText, setSearchText } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `top-headlines?country=in&apiKey=a9de866e655a4f9cb5a53ece3d5407bc`
        );
        setData(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const searchResult = async () => {
    setData([]);
    try {
      const { data } = await axios.get(
        `everything?q=${searchText}&from=2022-09-26&sortBy=popularity&apiKey=a9de866e655a4f9cb5a53ece3d5407bc`
      );
      setData(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTag = (event) => {
    setData([]);
    setTag(event.target.value);
    setSearchText(event.target.value.toLowerCase());
    if (event.target.value === "None") {
      return;
    }
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `everything?q=${event.target.value}&from=2022-09-26&sortBy=popularity&apiKey=a9de866e655a4f9cb5a53ece3d5407bc`
        );
        setData(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <>
      <div className="center">
        <div>
          <TextField
            id="standard-basic"
            label="search"
            variant="standard"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            className="button"
            variant="outlined"
            onClick={() => searchResult()}
          >
            Search
          </Button>
        </div>
        <div className="column">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Tag</InputLabel>
            <Select
              className="button"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tag}
              label="Age"
              onChange={handleTag}
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="Tech">Tech</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
