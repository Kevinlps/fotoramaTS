import { useRoutes } from 'react-router-dom'

import UserContext from './context/UserContext'

import { routes } from './routes'

const App = () => {

  const elements = useRoutes(routes)

  return <>
  <UserContext.Provider value= {{user:'feijo'}}>
  {elements}
  </UserContext.Provider>
  </>
}

export default App
