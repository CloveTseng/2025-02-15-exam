import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=10');
        setData(res.data.results);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="bg-light p-3">
                  <img
                    src={item.picture.large}
                    alt="頭像"
                    className="img-fluid rounded-circle"
                  />
                  <h2 className="mb-0">{item.name.title}</h2>
                  <p className="mb-0">{item.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
