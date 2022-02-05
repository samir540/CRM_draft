import React, { useState, useMemo, forwardRef, useImperativeHandle } from "react";
import { Form, Input, Select } from "antd";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import countryList from "react-select-country-list";

import "./UserRegistrationForm.css";

const { Option } = Select;

const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
  },
};

const UserRegistrationForm = ({ onCloseModal, onAddUser }, ref) => {
  const [form] = Form.useForm();

  const [phoneInputValue, setPhoneInputValue] = useState("");

  const onFinish = (values) => {
    // if (!values) return;

    onAddUser(values);
    onCloseModal();
    form.resetFields();
  };

  useImperativeHandle(ref, () => ({
    reset: form.resetFields,
  }));

  const countries = useMemo(() => countryList().getData(), []);

  const branches = [
    { id: "b1", name: "Branch 1" },
    { id: "b2", name: "Branch 2" },
    { id: "b3", name: "Branch 3" },
    { id: "b4", name: "Branch 4" },
    { id: "b5", name: "Branch 5" },
  ];

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="edit"
      onFinish={onFinish}
      id="userCreationForm"
      scrollToFirstError
      className="user-creation-form"
      ref={ref}
    >
      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            message: "Full Name is required!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Password is required!",
            whitespace: true,
          },
        ]}
        autoComplete="off"
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="branch"
        rules={[
          {
            required: true,
            message: "Branch is required!",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Select a branch"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {branches.map((branch) => {
            const { id, name } = branch;
            return (
              <Option key={id} value={name}>
                {name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name="mobile"
        rules={[
          {
            required: true,
            message: "Mobile is required!",
          },
        ]}
      >
        <PhoneInput
          placeholder="Mobile"
          value={phoneInputValue}
          onChange={setPhoneInputValue}
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "Email is invalid!",
          },
          {
            required: true,
            message: "Email is required!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="country"
        rules={[
          {
            required: true,
            message: "Country is required!",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Select a country"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          autoComplete="off"
        >
          {countries.map((country) => {
            const { value, label } = country;
            return (
              <Option key={value} value={label}>
                {label}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default forwardRef(UserRegistrationForm);
