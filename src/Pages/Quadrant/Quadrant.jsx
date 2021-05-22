import React, { useEffect, useState } from "react";
import styles from "./Quadrant.module.css";
import cx from "classnames";
import { RiAddCircleLine } from "react-icons/ri";
import { AiFillRightCircle } from "react-icons/ai";
import Todo from "../../Components/Todo/Todo";
import { useAuth } from "../../AuthContext";
import { Redirect } from "react-router";
function Quadrant() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const { currentUser } = useAuth();
  const [inpVisible, setInpVisible] = useState(0);
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    // console.log(localStorage.getItem("todos"));
  }, []);
  const toggleInput = (num) => {
    if (inpVisible != 0) {
      setInpVisible(0);
    } else {
      setInpVisible(num);
    }
  };

  const deleteTodo = (idx) => {
    const newTodos = todos;
    newTodos.splice(idx, 1);
    setTodos((prev) => [...newTodos]);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    console.log(todos);
  };

  const renderTodo = (num) => {
    return (
      <div className={styles.todos}>
        {todos.map((elem, i) => {
          // console.log(elem["completed"]);
          // console.log("rerender");
          if (elem["quad"] == num)
            return (
              <Todo
                task={elem["task"]}
                key={i}
                completed={elem["completed"]}
                idx={i}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
              />
            );
        })}
      </div>
    );
  };
  const toggleCompleted = (num) => {
    const newTodos = todos;
    const elem = newTodos[num];
    elem["completed"] = !elem["completed"];
    newTodos.splice(num, 1);
    newTodos.push(elem);

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const addItem = (quad) => {
    if (todo.length > 0) {
      const newTodos = [
        {
          task: todo,
          quad: quad,
          completed: false,
        },
        ...todos,
      ];

      setTodos(newTodos);
      setTodo("");
      setInpVisible(0);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };
  {
    console.log(currentUser);
    console.log(process.env.API_KEY);
  }
  return (
    <div className={styles.container}>
      {!currentUser && <Redirect to="/auth" />}

      <div className={styles.upperContainer}>
        <div className={styles.dummyBox}></div>
        <div className={cx(styles.heading, styles.horiHeading)}>
          <h4>Urgent</h4>
        </div>
        <div className={cx(styles.heading, styles.horiHeading)}>
          <h4>Not Urgent</h4>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.col1}>
          <div className={cx(styles.heading, styles.verHeading)}>
            <h4>Important</h4>
          </div>
          <div className={cx(styles.heading, styles.verHeading)}>
            <h4>Not Important</h4>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.quadContainer}>
            <div className={styles.quad}>
              <div className={styles.addElems}>
                <button onClick={() => toggleInput(3)}>
                  <RiAddCircleLine size={30} />
                </button>

                {inpVisible == 3 ? (
                  <div className={styles.todoInputContainer}>
                    <input
                      className={styles.todoInput}
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                      type="text"
                      placeholder="Enter You Task"
                    />
                    <button type="submit" onClick={() => addItem(3)}>
                      <AiFillRightCircle size={25} />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {renderTodo(3)}
            </div>
            <div className={styles.quad}>
              <div className={styles.addElems}>
                <button onClick={() => toggleInput(4)}>
                  <RiAddCircleLine size={30} />
                </button>

                {inpVisible == 4 ? (
                  <div className={styles.todoInputContainer}>
                    <input
                      className={styles.todoInput}
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                      type="text"
                      placeholder="Enter You Task"
                    />
                    <button type="submit" onClick={() => addItem(4)}>
                      <AiFillRightCircle size={25} />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {renderTodo(4)}
            </div>
          </div>
          <div className={styles.quadContainer}>
            <div className={styles.quad}>
              <div className={styles.addElems}>
                <button onClick={() => toggleInput(1)}>
                  <RiAddCircleLine size={30} />
                </button>

                {inpVisible == 1 ? (
                  <div className={styles.todoInputContainer}>
                    <input
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                      className={styles.todoInput}
                      type="text"
                      placeholder="Enter You Task"
                    />
                    <button type="submit" onClick={() => addItem(1)}>
                      <AiFillRightCircle size={25} />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {renderTodo(1)}
            </div>
            <div className={styles.quad}>
              <div className={styles.addElems}>
                <button onClick={() => toggleInput(2)}>
                  <RiAddCircleLine size={30} />
                </button>

                {inpVisible == 2 ? (
                  <div className={styles.todoInputContainer}>
                    <input
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                      className={styles.todoInput}
                      type="text"
                      placeholder="Enter You Task"
                    />
                    <button type="submit" onClick={() => addItem(2)}>
                      <AiFillRightCircle size={25} />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {renderTodo(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quadrant;
