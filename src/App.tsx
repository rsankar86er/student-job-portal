import './App.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Layout from './Layout/Layout';
import CandidateLogin from './CandidateLogin/CandidateLogin';
import CandidateSignup from './CandidateSignup/CandidateSignup';
import InstituteSignin from './InstituteSignin/InstituteSignin';
import InstituteSignup from './InstituteSignup/InstituteSignup';

function App() {
  return (
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
         </Route>
       </Routes>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
