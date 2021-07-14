import './App.css';
import {useState, useEffect} from 'react';
import {Row, Col,Card} from 'react-bootstrap';

function App() {
  const [user, setUser] = useState([]);
  const [detail, setDetail] = useState(null);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);

  const addProfile = (user) => {
    setDetail(user);
  }


  return (
    <div className="App">
      <Row>
        <Col xs={8}>
          <Row>
            {user.map(profile => {
            return (
              <Col lg={6}>
                <div key={profile.id} >
                  <Card body>{profile.name}</Card>
                  <button onClick={() => {addProfile(profile)}}>Set</button>
              </div>
              </Col>
            )
          })}
          </Row>
        </Col>
        <Col xs={4}>
          {detail != null ? (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{detail.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{detail.username}</Card.Subtitle>
                <Card.Text>
                  Address: {detail.street + ' '+detail.suite+' '+detail.city+' '+detail.zipcode}
                </Card.Text>
                <Card.Link href="#">Email: {detail.email}</Card.Link><br/>
                <Card.Link href="#">Phone: {detail.phone}</Card.Link>
              </Card.Body>
            </Card>
          ) : (
            <h1>No Data Found</h1>
          )}
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
