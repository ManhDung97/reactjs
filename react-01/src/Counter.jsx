import React from "react";

export default function Counter({ data }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Phone</th>
          </tr>
        </thead>
        {data.map(( { id, first_name, last_name,email,gender, age, salary,  phone }, index) => (
    
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{phone}</td>
              </tr>
            </tbody>
          )
        )}
      </table>
    </div>
  );
}
