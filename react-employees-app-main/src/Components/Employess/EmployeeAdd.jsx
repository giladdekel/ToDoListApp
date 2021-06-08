import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

export default function EmployeeAdd(props) {

    const [employee, setEmployee] = useState({})

    function changeEmployeeState(e){
        let newState = employee

        if(e.target.id === 'Title'){
            newState.Title = e.target.value
        } else if (e.target.id === 'FirstName'){
            newState.FirstName = e.target.value
        } else if (e.target.id === 'LastName'){
            newState.LastName = e.target.value
        }
        setEmployee({...employee, newState})
    }


    function addEmployee() {
        // const employees = JSON.parse(localStorage.getItem("employees"))
        // const newEmployee = {
        //   EmployeeID: employees?employees.length + 1:1,
        //   FirstName: employee.FirstName,
        //   LastName: employee.LastName,
        //   Title: employee.Title,
        // };
        // const newEmployees = [...employees, newEmployee]
        // localStorage.setItem("employees", JSON.stringify(newEmployees))


        const newEmployee = {
          EmployeeID: 1,
          FirstName: "employee.FirstName",
          LastName: "employee.LastName",
          Title: "employee.Title",
        };
        // const newEmployees = [...employees, newEmployee];


  try {
    const { data } = axios.post(
      `http://localhost:8000/api/employees/`,
      newEmployee
    );
   
  } catch (error) {
  console.log('error :', error);
    // const message =
    //   error.response && error.response.data.message
    //     ? error.response.data.message
    //     : error.message;
    // dispatch({ type: POST_COMMENT_CREATE_FAIL, payload: message });
  }




    }


    function addMe(e){
        e.preventDefault();
        console.log(props);
        addEmployee()
        props.history.push('/employees')
    }

    return (
        <div>
            <h1>Add Employee Form</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <label htmlFor="Title" className="grey-text">
                            Title
                            </label>
                            <input onChange={changeEmployeeState} type="text" id="Title" className="form-control" />
                            <br />
                            <label htmlFor="FirstName" className="grey-text">
                            First Name
                            </label>
                            <input onChange={changeEmployeeState} type="text" id="FirstName" className="form-control" />
                            <br />
                            <label htmlFor="LastName" className="grey-text">
                            Last Name
                            </label>
                            <input onChange={changeEmployeeState} type="text" id="LastName" className="form-control" />
                            <div className="text-center mt-4">
                            <button onClick={addMe} className="btn btn-success" type="button">
                                    Save
                            </button>
                            <Link to="/employees" className="btn btn-outline-success">
                                    cancel
                            </Link>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
