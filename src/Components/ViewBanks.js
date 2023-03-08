import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function ViewBanks() {
  return (
    <div style={{ fontFamily: 'serif' }} className="mt-5">
      <h1>List Of Banks</h1>
      <Table striped bordered hover variant="peach">

        <thead>

          <tr>

            <th>Bank Name</th>
            <th>Email-Id</th>

            <th> Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>SBI</td>
            <td>Sbi@gmail.com</td>

            <td> <Button variant="danger">Delete</Button>{' '}</td>
          </tr>
          <tr>

            <td>B.O.B</td>
            <td>bob@gmail.com</td>

            <td> <Button variant="danger">Delete</Button>{' '}</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
}

export default ViewBanks;