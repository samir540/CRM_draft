import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../styles/Login.css';

function LoginPage({ onLoginHandler }) {
  const [hasError, setHasError] = useState(false);

  const onFinish = values => {
    if (values.email !== 'admin@admin.com' || values.password !== '1234') {
      setHasError(true);
      return;
    }

    onLoginHandler();
  };

  return (
    <div className='login-page'>
      {hasError && (
        <h1 className='wrong-credentials'>Wrong email or password!</h1>
      )}
      <Form
        name='normal_login'
        className='login-form'
        onFinish={onFinish}
      >
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'Email is invalid!',
            },
            {
              required: true,
              message: 'Email is required!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='EMAIL'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Password is required!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='PASSWORD'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            LOG IN
          </Button>
        </Form.Item>
        <Form.Item>
          <a className='login-form-forgot' href='google.com'>
            Forgot password?
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
