import React, { useState } from "react";
import { Select } from "antd";

const LimitTag = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleInputConfirm = () => {
    if (inputValue) {
      setSelectedItems([...selectedItems, inputValue]);
      setInputValue(""); // Clear the input after adding the label
    }
  };

  return (
    <Select
      mode="tags" // Set mode to "tags" for creating tags instead of dropdown
      placeholder="Add label here"
      value={selectedItems}
      onChange={setSelectedItems}
      onInputKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleInputConfirm();
        }
      }}
      style={{
        width: "100%",

        marginTop: "20px",
      }}
      tokenSeparators={[",", ";"]} // Specify separators for creating tags
      onInput={(e) => handleInputChange(e.target.value)}
    />
  );
};

export default LimitTag;
