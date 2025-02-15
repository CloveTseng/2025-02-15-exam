function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="row">
          <div className="col-md-4">
            <div className="bg-light p-3">
              <img
                src="https://randomuser.me/api/portraits/women/61.jpg"
                alt="頭像"
                className="img-fluid rounded-circle"
              />
              <h2 className="mb-0">Mona Heen</h2>
              <p className="mb-0">mona.heen@example.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3">
              <img
                src="https://randomuser.me/api/portraits/women/10.jpg"
                alt="頭像"
                className="img-fluid rounded-circle"
              />
              <h2 className="mb-0">Susan Craig</h2>
              <p className="mb-0">susan.craig@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
