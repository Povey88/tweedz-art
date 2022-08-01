import Navigation from './components/Navigation';
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import logo from './art-logo.jpg'
import './App.css';

function App() {
  return (
   
    <Box>
      <Navigation /> 
      <Image p={4} src={logo}/> 

     
    </Box>
  );
}

export default App;
