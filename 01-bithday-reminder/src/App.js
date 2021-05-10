import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)

  // remove all birthday info
  const removeAllBirthdays = () => {
    setPeople([])
  }

  return (
    <main>
      <section className="container">
        <h2>{people.length} birthday</h2>
        <List people={people} />
        <button className="btn" onClick={removeAllBirthdays}>
          {' '}
          Remove all
        </button>
      </section>
    </main>
  )
}

export default App
