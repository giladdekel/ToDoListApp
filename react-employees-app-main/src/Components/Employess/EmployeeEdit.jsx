import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeEdit(props) {

    const [employee, setEmployee] = useState({
        Title: '',
        FirstName: '',
        LastName: ''
    })

    useEffect(() => {
        // console.log(props.match.params.id)
        getEmployee(props.match.params.id)
        // return () => {
        //     cleanup
        // }
    }, [])


    function getEmployee(employeeId){
        const employees = JSON.parse(localStorage.getItem("employees"))
        const employee = employees.filter((employee) => {
            return employee.EmployeeID == employeeId
        })[0]
        setEmployee(employee)
    }

    return (
        <div>
            <h1>Edit Employee Form</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <label htmlFor="Title" className="grey-text">
                                Title
                            </label>
                            <input value={employee.Title} type="text" id="Title" className="form-control" />
                            <br />
                            <label htmlFor="FirstName" className="grey-text">
                                First Name
                            </label>
                            <input value={employee.FirstName} type="text" id="FirstName" className="form-control" />
                            <br />
                            <label htmlFor="LastName" className="grey-text">
                                Last Name
                            </label>
                            <input value={employee.LastName} type="text" id="LastName" className="form-control" />
                            <div className="text-center mt-4">
                                <button className="btn btn-warning" type="button">
                                    Save
                            </button>
                            <Link to="/employees" className="btn btn-outline-warning">
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
