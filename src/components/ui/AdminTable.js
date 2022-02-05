import { Table, Space, Button, Modal, Form, Input, Select } from "antd";
import React, { useState } from "react";

import "./AdminTable.css";

function AdminTable(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const editHandler = (record) => {
    setIsModalVisible(true);
  };

  const { data, config, onEditUser } = props;

  const columns = [
    ...config,
    {
      title: "Actions",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              style={{
                color: "#FFF",
              }}
              className={`${record.isActive ? "de" : ""}activate-button`}
              onClick={onEditUser.bind(null, record.key)}
            >
              {record.isActive ? "Deactivate" : "Activate"}
            </Button>
            <Button type="danger">Delete</Button>
          </Space>
        );
      },
    },
  ];

  return (
    <div className="page-table" style={{ marginTop: "20px" }}>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        scroll={{ x: true }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default AdminTable;
