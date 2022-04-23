import {Route ,Routes} from 'react-router-dom'
import { Home } from './components/home/Home';
import { University } from "../src/components/university/University.js"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/univers" element={<University />} />
      </Routes>
    </>
  );
}

export default App;
