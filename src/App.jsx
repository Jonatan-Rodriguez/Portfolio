import { Providers } from './app/providers';
import Navbar from './app/components/Navbar';
import Footer from './app/components/Footer';
import Home from './app/page'; 
import './app/globals.css'; 

function App() {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        
          <Home /> 
        
        <Footer />
      </div>
    </Providers>
  );
}

export default App;