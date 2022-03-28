import './App.css';
// import { FormikContainter } from './components/FormikContainter';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
import EnrollmentForm from './components/EnrollmentForm';
import { Theme, ThemeProvider } from '@chakra-ui/core'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <EnrollmentForm />
      </div>
    </ThemeProvider>
  );
}

export default App