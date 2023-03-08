import Table from 'react-bootstrap/Table';

function RankList() {
  return (
    <div style={{ fontFamily: 'serif' }} className="mt-5">
      <h1>Rank List</h1>
    <Table striped bordered hover variant="peach">
     
      <thead>
       
        <tr>
       
         <th>Rank</th>
          <th>Customer Name</th>
          <th>Bank Account</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>SBI</td>
          <td>600</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>BOB</td>
          <td>350</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  );
}

export default RankList;