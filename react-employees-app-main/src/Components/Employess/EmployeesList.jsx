import { MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function EmployeesList() {

    const [modal, setModal] = useState({show:false})

    const [employees, setEmployees] = useState([

    ])


    useEffect(() => {
        getEmployees()

    }, [])



    async function getEmployees() {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const response = await fetch('http://localhost:8001/api/employees');
        let employees = await response.json();
        //   console.log(employees.data);
        //   employees = employees.map((emplyee, idx) => {
        //       return {
        //           EmployeeID: idx + 1,
        //           FirstName: emplyee.name.split(' ')[0],
        //           LastName: emplyee.name.split(' ')[1],
        //           Title: emplyee.username
        //       }
        //   })
          employees = employees.data.map((emplyee, idx) => {
              return {
                  EmployeeID: emplyee.id,
                  FirstName: emplyee.first_name,
                  LastName: emplyee.last_name,
                  Title: emplyee.title
              }
          })
          setEmployees(employees)

      } catch (error) {
        console.log(error.message);
      }


        // if (JSON.parse(localStorage.getItem("employees")))
        //     setEmployees(JSON.parse(localStorage.getItem("employees")))
        // else
        //     localStorage.setItem("employees", JSON.stringify(employees))
    }


    function toggle(id){
            setModal({
                show: !modal.show,
                EmployeeID: id
            }
        );
    }



    function deleteEmployee(){
        // console.log(employees)
        const newEmployess = employees.filter((employee) => employee.EmployeeID != modal.EmployeeID)
        // console.log(newEmployess);
        localStorage.setItem("employees", JSON.stringify(newEmployess))
        setEmployees(newEmployess)
        setModal({show:false, employee:null})
    }

    return (
        <div>
            <h1 className="font-weight-bold">Employees List</h1>
            <p>Welcome to Employees List</p>
            <MDBTable>
                <MDBTableHead color="elegant-color" textWhite>
                    <tr>
                        <th className="font-weight-bold">EmployeeID</th>
                        <th className="font-weight-bold">Image</th>
                        <th className="font-weight-bold">FistName</th>
                        <th className="font-weight-bold">LastName</th>
                        <th className="font-weight-bold">Title</th>
                        <th>
                            <Link className="btn btn-success" to="/employees/add">
                                Add Employee <MDBIcon icon="plus" className="ml-1" />
                            </Link>
                            {/* <button className="btn btn-success" onClick={()=>addEmployee()}>
                                Add Employee <MDBIcon icon="plus" className="ml-1" />
                            </button> */}
                        </th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                   {employees.map(({EmployeeID, FirstName, LastName,Title}, idx) => (
                       <tr key={idx}>
                           <td>{EmployeeID}</td>
                           <td><img src={`https://randomuser.me/api/portraits/men/${EmployeeID}.jpg`} alt={`${FirstName} ${LastName}`} /></td>
                           <td>{FirstName}</td>
                           <td>{LastName}</td>
                           <td>{Title}</td>
                           <td>
                               <Link to={`/employees/${EmployeeID}/edit`} className="btn btn-warning btn-md" >
                                   Edit <MDBIcon icon="pen" className="ml-1" />
                               </Link>
                               <button onClick={() => toggle(EmployeeID)} className="btn btn-danger btn-md btn-rounded" type="button">
                                   Delete <MDBIcon icon="trash" className="ml-1" />
                               </button>
                           </td>
                       </tr>
                   ))}
                </MDBTableBody>
            </MDBTable>
            <MDBModal isOpen={modal.show} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                   Are you sure you want to delete this employee?
                </MDBModalBody>
                <MDBModalFooter>
                    <button onClick={deleteEmployee} className="btn btn-primary">Yes</button>
                    <button className="btn btn-secondary" onClick={toggle}>No</button>
                </MDBModalFooter>
            </MDBModal>
        </div>
    )
}
