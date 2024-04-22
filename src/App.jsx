import React, { useState } from 'react'
import Repositories from './Components/Repositories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import SingleRepo from './Components/SingleRepo';
import NotFoundPage from './Components/NotFoundPage';
import UpdateRepo from './Components/UpdateRepo';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundry from './Components/ErrorBoundry';
import ToastError from './Components/ToastError';

const App = () => {
  const [isErrorTrue, setIsErrorTrue] = useState(false);

  return (
    <>
    {isErrorTrue && <ErrorBoundry isErrorTrue={isErrorTrue} />}
      <Router>
      <Routes>
        <Route element={<Layout setIsErrorTrue={setIsErrorTrue}  />}>
          <Route path='/' element={<Repositories setIsErrorTrue={setIsErrorTrue} />} />
          <Route path='/SingleRepo/:owner/:repoName' element={<SingleRepo setIsErrorTrue={setIsErrorTrue} />} />
          <Route path='/UpdateRepo/:owner/:repoName' element={<UpdateRepo />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      
    </Router>
    </>
  )
}

export default App
