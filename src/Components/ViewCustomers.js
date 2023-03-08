import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function ViewCustomers() {
  return (
    <div style={{ fontFamily: 'serif' }} className="mt-5">
      <h1>List Of Customers</h1>
      <Table striped bordered hover variant="peach">

        <thead>

          <tr>

            <th>Customer Name</th>
            <th>Bank Account</th>
            <th>Score</th>
            <th> Update</th>
            <th> Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Namita</td>
            <td>SBI</td>
            <td>400</td>
            <td> <Button variant="primary">Update</Button>{' '}</td>
            <td> <Button variant="danger">Delete</Button>{' '}</td>
          </tr>
          <tr>
            <td>Neelam</td>
            <td>B.O.B</td>
            <td>406</td>
            <td> <Button variant="primary">Update</Button>{' '}</td>
            <td> <Button variant="danger">Delete</Button>{' '}</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
}

export default ViewCustomers;