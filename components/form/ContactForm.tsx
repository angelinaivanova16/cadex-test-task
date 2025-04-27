'use client'

import s from "./form.module.css";
import { Form, Input } from 'antd';
const { TextArea } = Input;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {

  const onFinish = (values: FormValues) => {
    console.log('Received values:', values);

    // fetch('/api/submit', {
    //   method: 'POST',
    //   body: JSON.stringify(values),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className={s.form}>
      <Form
        className={s.inputsContainer}
        onFinish={onFinish}
      >
        <label htmlFor="name" className={s.label}>Name</label>
        <Form.Item
          name="name"
          rules={[
            { required: true, message: 'Please enter your name' },
            { min: 2, message: 'At least 2 characters' },
          ]}
        >
          <Input
            type="text"
            placeholder='Your name'
            maxLength={50}
            allowClear
          />
        </Form.Item>
        <label htmlFor="email" className={s.label}>Email</label>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}
        >
          <Input
            type="email"
            placeholder='Your email'
            maxLength={100}
            allowClear
          />
        </Form.Item>
        <label htmlFor="message" className={s.label}>Message</label>
        <Form.Item
          name="message"
          rules={[
            { required: true, message: 'Please enter your message' },
            { min: 10, message: 'At least 10 characters' },
          ]}
        >
          <TextArea
            rows={3}
            placeholder="Your message"
            allowClear
            maxLength={1000}
          />
        </Form.Item>
        <button
          type="submit"
          className={s.btn}
        >
          Submit
        </button>
      </Form>
    </div>
  )
}