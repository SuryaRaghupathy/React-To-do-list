import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Flex } from "antd";
import { Modal, Button, Dropdown, Space } from "antd"; // Remove the duplicate import for Button
import { useState } from "react";
import EmojiFlagsSharpIcon from "@mui/icons-material/EmojiFlagsSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import DownOutlined from "@ant-design/icons";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";
import LimitTag from "./LimitTags";
const Content1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [isAddTaskDisabled, setIsAddTaskDisabled] = useState(true);
  const [showLimitTag, setShowLimitTag] = useState(false);

  const handleButtonClick = () => {
    setShowLimitTag(true);
    // Add any other logic you want to perform on button click
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="content1-container">
          <EmojiFlagsSharpIcon
            style={{
              marginRight: 8,
              color: "red",
            }}
          />
          1st Priority
          {/* <CheckCircleSharpIcon
            style={{
              marginLeft: 8,
              color: "black",
            }}
          /> */}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="content1-container">
          <EmojiFlagsSharpIcon
            style={{
              marginRight: 8,
              color: "yellow",
            }}
          />
          2nd Priority
          {/* <CheckCircleSharpIcon
            style={{
              marginLeft: 8,
              color: "black",
            }}
          /> */}
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="content1-container">
          <EmojiFlagsSharpIcon
            style={{
              marginRight: 8,
              color: "blue",
            }}
          />
          3rd Priority
          {/* <CheckCircleSharpIcon
            style={{
              marginLeft: 8,
              color: "black",
            }}
          /> */}
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="content1-container">
          <EmojiFlagsSharpIcon
            style={{
              marginRight: 8,
              color: "black",
            }}
          />
          4th Priority
          {/* <CheckCircleSharpIcon
            style={{
              marginLeft: 8,
              color: "black",
            }}
          /> */}
        </div>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handlePrioritySelect = (key) => {
    setSelectedPriority(key);
    closeDropdown();
  };

  const handleTitleChange = (e) => {
    setModalTitle(e.target.value);
    setIsAddTaskDisabled(e.target.value.trim() === "");
  };

  const modalFooter = (
    <div>
      <Button
        key="back"
        onClick={handleCancel}
        style={{ marginRight: 8, backgroundColor: "#EAE3E3", color: "black" }}
      >
        Cancel
      </Button>
      <Button
        key="submit"
        type="primary"
        onClick={handleCancel}
        style={{
          marginRight: 8,
          backgroundColor: "#F14040",
          color: "white",
          opacity: isAddTaskDisabled ? 0.5 : 1,
        }}
        disabled={isAddTaskDisabled}
      >
        Add Task
      </Button>
    </div>
  );

  return (
    <>
      <div>
        <div className="content1-container"> Welcome User</div>

        <div className="content1-container hover-effect" onClick={showModal}>
          <AddCircleIcon className="add-icon" />
          <span>Add Task</span>
        </div>
      </div>
      <Modal
        title={
          <Input
            placeholder="Enter the task"
            value={modalTitle}
            onChange={handleTitleChange}
            style={{
              borderBottom: "0",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            disableUnderline
          />
        }
        visible={isModalVisible} // Change 'open' to 'visible'
        footer={modalFooter}
        closable={false}
      >
        <TextField
          id="standard-basic"
          label=" Short Description"
          variant="standard"
          style={{ width: "400px" }}
          inputProps={{ maxLength: 50 }}
          InputProps={{ disableUnderline: true }}
        />
        {showLimitTag && <LimitTag />}
        <div style={{ marginTop: "20px" }}>
          <Flex gap="small" wrap="wrap">
            <Button>Today</Button>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items: items.map((item) => ({
                      ...item,
                      content: (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {item.key === selectedPriority && (
                            <CheckCircleSharpIcon
                              style={{
                                marginRight: 8,
                                color: "green", // Change color as needed
                              }}
                            />
                          )}
                          {item.label}
                        </div>
                      ),
                      onClick: () => handlePrioritySelect(item.key),
                    })),
                  }}
                  placement="bottom"
                  show={isDropdownVisible}
                  onHide={closeDropdown}
                >
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "180px",
                    }}
                    onClick={toggleDropdown}
                  >
                    {selectedPriority ? (
                      <>
                        <span>
                          {
                            items.find((item) => item.key === selectedPriority)
                              .label
                          }
                        </span>

                        {/* You can add an icon or other elements if needed */}
                      </>
                    ) : (
                      " Select Priority"
                    )}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </Space>
            </Space>

            <Button onClick={handleButtonClick}> Add Label</Button>
          </Flex>
        </div>
      </Modal>
    </>
  );
};

export default Content1;
