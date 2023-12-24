import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/route.private'

const Layout = lazy(() => import('../layout'))
const Home = lazy(() => import('../../pages/home'))

import Auth from '../../pages/auth'
import PageNotFound from '../../pages/404'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading ...</span>}>
        <Routes>
          {/* <Route element={<PrivateRoute />}> */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          {/* </Route> */}
          <Route path='/auth'>
            <Route index path='login' element={<Auth />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
