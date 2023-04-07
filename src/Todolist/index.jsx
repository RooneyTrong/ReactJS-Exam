import { Fragment } from "react";
import { Form, Input, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import TodoItem from "./TodoItem";

import { addToDoAction } from "../redux/actions";

function TodoList() {
  const [addForm] = Form.useForm();

  const { todoList } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const renderToDoList = () => {
    return todoList.map((item) => {
      return (
        <Fragment key={item.id}>
          <TodoItem
            id={item.id}
            name={item.name}
            age={item.age}
            salary={item.salary}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <Card size="small">
        <Form
          name="addTodo"
          form={addForm}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={(values) => {
            dispatch(addToDoAction(values));
            // dispatch({
            //   type: 'ADD_TO_DO',
            //   payload: values
            // })
            addForm.resetFields();
          }}
        >
          <Form.Item>
            <h2>User</h2>
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            validateFirst
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
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Content là bắt buộc!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Salary"
            name="salary"
            validateFirst
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
          <Button
            style={{ width: "10%", float: "right" }}
            danger
            htmlType="reset"
            block
          >
            Rest Form
          </Button>
          <Button
            style={{ width: "10%", float: "right" }}
            type="primary"
            htmlType="submit"
            block
          >
            Add
          </Button>
        </Form>
      </Card>
      <h2>List of Users</h2>

      {renderToDoList()}
    </div>
  );
}

export default TodoList;
