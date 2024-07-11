import './App.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Layout from './Pages/Layout/Layout';
import CandidateLogin from './Pages/CandidateLogin/CandidateLogin';
import CandidateSignup from './Pages/CandidateSignup/CandidateSignup';
import InstituteSignin from './Pages/InstituteSignin/InstituteSignin';
import InstituteSignup from './Pages/InstituteSignup/InstituteSignup';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import InstituteProfile from './Pages/InstituteProfile/InstituteProfile';
import JobListing from './Pages/JobListing/JobListing';

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
       <Routes>
         <Route element={<Layout />} >
           <Route path="/" element={<LandingPage />} />
           <Route path="/CandidateLogin" element={<CandidateLogin />} />
           <Route path="/CandidateSignup" element={<CandidateSignup />} />
           <Route path="/InstituteSignin" element={<InstituteSignin />} />
           <Route path="/InstituteSignup" element={<InstituteSignup />} />
           <Route path="/InstituteProfile" element={<InstituteProfile />} />
           <Route path="/JobListing" element={<JobListing />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
