
import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import Layout from '../pages/Layout/Layout.jsx'
import Candidates from '../pages/Candidates.jsx'
import AddCandidate from '../pages/AddCandidates.jsx';
import CandidateDetails from '../pages/CandidateDetails.jsx';


const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Candidates />} />
      <Route path="/candidate/add" element={<AddCandidate />} />
      <Route path="/candidate/edit/:candidateId" element={<AddCandidate />} />
      <Route path="/candidate/:candidateId" element={<CandidateDetails />} />
    </Route>
  )
);

  export default appRouter;