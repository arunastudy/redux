import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import myRouter from './router'
import { myStore } from './redux/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={myStore}>
      <RouterProvider router={myRouter} />
    </Provider>
  )
}

export default App
