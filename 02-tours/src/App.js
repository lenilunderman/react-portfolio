import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  // remove tour
  const removeTour = (id) => {
    // check if matches and return only the one it doesnt match
    const newTour = tours.filter((item) => item.id !== id)
    setTours(newTour)
  }

  // fetch the data
  const fetchTours = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      console.error(error)
    }
  }
  // effects
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button onClick={fetchTours} className="btn">
            {' '}
            Refresh Page
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
