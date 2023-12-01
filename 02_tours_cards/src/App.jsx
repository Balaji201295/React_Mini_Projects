import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      {tours.length ? (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      ) : (
        <main>
          <div className="title">
            <h2>no tours</h2>
            <button type="button" className="btn" onClick={() => fetchTours()}>
              Refresh
            </button>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
