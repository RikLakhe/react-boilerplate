import React from 'react'

import {Steps, Form,Input} from 'antd';
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
};


export default () => {
  return (
    <React.Fragment>
    <FormItem {...formItemLayout} label="Address"><Input/></FormItem>
    <FormItem {...formItemLayout} label="Email"><Input/></FormItem>
    <FormItem {...formItemLayout} label="Password"><Input/></FormItem>
    </React.Fragment>
  )
}
