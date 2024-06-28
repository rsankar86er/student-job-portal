import './App.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Layout from './Layout/Layout';
import CandidateLogin from './CandidateLogin/CandidateLogin';
import CandidateSignup from './CandidateSignup/CandidateSignup';

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
         </Route>
       </Routes>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
