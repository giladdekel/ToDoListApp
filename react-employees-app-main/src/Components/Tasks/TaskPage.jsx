// import {
//   MDBIcon,
//   MDBModal,
//   MDBModalBody,
//   MDBModalFooter,
//   MDBModalHeader,
//   MDBTable,
//   MDBTableBody,
//   MDBTableHead,
// } from "mdbreact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./TaskPage.css";

import axios from "axios";
export default function TaskPage() {
  //   const [modal, setModal] = useState({ show: false });

  //   const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  async function getTasks() {
    try {
      const response = await axios.get(`http://localhost:8000/api/tasks/`);
      console.log(response.data.data);
      setLoading(false);
      setTasks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  //   async function getEmployees() {
  //     try {
  //       // const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //       const response = await fetch("http://localhost:8001/api/employees");
  //       let employees = await response.json();
  //       //   console.log(employees.data);
  //       //   employees = employees.map((emplyee, idx) => {
  //       //       return {
  //       //           EmployeeID: idx + 1,
  //       //           FirstName: emplyee.name.split(' ')[0],
  //       //           LastName: emplyee.name.split(' ')[1],
  //       //           Title: emplyee.username
  //       //       }
  //       //   })
  //       employees = employees.data.map((emplyee, idx) => {
  //         return {
  //           EmployeeID: emplyee.id,
  //           FirstName: emplyee.first_name,
  //           LastName: emplyee.last_name,
  //           Title: emplyee.title,
  //         };
  //       });
  //       setEmployees(employees);
  //     } catch (error) {
  //       console.log(error.message);
  //     }

  //     // if (JSON.parse(localStorage.getItem("employees")))
  //     //     setEmployees(JSON.parse(localStorage.getItem("employees")))
  //     // else
  //     //     localStorage.setItem("employees", JSON.stringify(employees))
  //   }

  // function toggle(id){
  //         setModal({
  //             show: !modal.show,
  //             EmployeeID: id
  //         }
  //     );
  // }

  // function deleteEmployee(){
  //     // console.log(employees)
  //     const newEmployess = employees.filter((employee) => employee.EmployeeID != modal.EmployeeID)
  //     // console.log(newEmployess);
  //     localStorage.setItem("employees", JSON.stringify(newEmployess))
  //     setEmployees(newEmployess)
  //     setModal({show:false, employee:null})
  // }

  function toggleDone(id) {
    console.log('%cTaskPage.jsx line:92 "eeee"', "color: #007acc;", id);
    // setRefreshPage((prev)=>!prev);
    getTasks();

    try {
      const { data } = axios.put(`http://localhost:8000/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.log("error :", error);
      // const message =
      //   error.response && error.response.data.message
      //     ? error.response.data.message
      //     : error.message;
      // dispatch({ type: POST_COMMENT_CREATE_FAIL, payload: message });
    }
  }

  function deleteTask(id) {
    console.log('%cTaskPage.jsx line:92 "eeee"', "color: #007acc;", id);
    // setRefreshPage((prev)=>!prev);
    getTasks();

    try {
      const { data } = axios.delete(`http://localhost:8000/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.log("error :", error);
      // const message =
      //   error.response && error.response.data.message
      //     ? error.response.data.message
      //     : error.message;
      // dispatch({ type: POST_COMMENT_CREATE_FAIL, payload: message });
    }
  }

  function addTask() {
    console.log("clickkkk");
    // setRefreshPage((prev)=>!prev);
    getTasks();

    try {
      const { data } = axios.post(`http://localhost:8000/api/tasks/`, {
        text: task,
        done: false,
      });
      getTasks();
      setTask("");
    } catch (error) {
      console.log("error :", error);
      // const message =
      //   error.response && error.response.data.message
      //     ? error.response.data.message
      //     : error.message;
      // dispatch({ type: POST_COMMENT_CREATE_FAIL, payload: message });
    }
  }

  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <table id="customers">
            <tr>
              <th>משימות</th>
              <button className="btn-th" onClick={addTask}>
                +
              </button>
            </tr>

            <tr>
              <input
                onChange={(e) => setTask(e.target.value)}
                className="text-input"
                type="text"
                value={task}
              ></input>
            </tr>

            {tasks.map((task, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className={task.done ? "done" : "undone"}>
                      <input
                        className="checkbox-tr"
                        type="checkbox"
                        onChange={() => {
                          toggleDone(task.id);
                        }}
                      ></input>
                     {Number(index) + 1}. {task.text} 
                      <button
                        onClick={() => {
                          deleteTask(task.id);
                        }}
                        className="btn-tr"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                  {/* <h1>{task.done}</h1> */}
                </>
              );
            })}
          </table>
        </>
      )}
    </div>
  );
}
