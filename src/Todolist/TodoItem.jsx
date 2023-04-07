import { useState } from "react";
import { Form, Input, Card, Button, Space } from "antd";
import { useDispatch } from "react-redux";

import { editToDoAction, removeToDoAction } from "../redux/actions";

function TodoItem({ id, name, age, salary }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editForm] = Form.useForm();

  const dispatch = useDispatch();

  const renderView = () => {
    return (
      <>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Salary: {salary}</div>
      </>
    );
  };

  const renderEdit = () => {
    return (
      <Form
        name={`editTodo-${id}`}
        form={editForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{
          name: name,
          age: age,
          salary: salary,
        }}
        onFinish={(values) => {
          dispatch(editToDoAction({ id: id, values: values }));
          setIsEdit(false);
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Name là bắt buộc!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Age là bắt buộc!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Salary"
          name="salary"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Salary là bắt buộc!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    );
  };

  return (
    <Card size="small" style={{ marginTop: 16 }}>
      {isEdit ? renderEdit() : renderView()}
      <Space>
        {isEdit ? (
          <>
            <Button key="save" type="primary" onClick={() => editForm.submit()}>
              Save
            </Button>
            <Button key="cancel" onClick={() => setIsEdit(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <Button
            key="Edit"
            type="primary"
            ghost
            onClick={() => setIsEdit(true)}
          >
            Edit
          </Button>
        )}
        <Button danger onClick={() => dispatch(removeToDoAction({ id: id }))}>
          Remove
        </Button>
      </Space>
    </Card>
  );
}

export default TodoItem;
