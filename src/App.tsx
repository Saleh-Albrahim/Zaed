import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';
import HomePage from 'pages/HomePage';
import BeneficiaryPage from 'pages/BeneficiaryPage';
import DonatePage from 'pages/DonatePage';
import NotFound from 'pages/NotFound';
import theme from './theme';
import '@fontsource/tajawal';

const App: () => JSX.Element = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Container maxW="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/donate" component={DonatePage} />
            <Route path="/beneficiary" component={BeneficiaryPage} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
