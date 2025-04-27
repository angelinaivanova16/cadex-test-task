'use client'

import { useState } from "react";
import s from "./form.module.css";
import { Form, Input } from 'antd';
const { TextArea } = Input;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);


  const onFinish = async (values: FormValues) => {
    console.log('Received values:', values);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Произошла ошибка при отправке данных.');
      setIsSubmitted(true);
    }
  };

  return (
    <div className={s.form}>
      {!isSubmitted ? (
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
              className={s.input}
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
              className={s.input}
            />
          </Form.Item>
          <label htmlFor="message" className={s.label}>Message</label>
          <Form.Item
            name="message"
            rules={[
              { required: true, message: 'Please enter your message' },
              { min: 5, message: 'At least 5 characters' },
            ]}
          >
            <TextArea
              rows={3}
              placeholder="Your message"
              allowClear
              maxLength={1000}
              className={s.input}
            />
          </Form.Item>
          <button
            type="submit"
            className={s.btn}
          >
            Submit
          </button>
        </Form>
      ) : (
        <h2 className={s.responseMessage}>{responseMessage}</h2>
      )}
    </div>
  )
}