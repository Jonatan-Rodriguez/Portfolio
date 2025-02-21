import { Providers } from './app/providers';
import Navbar from './app/components/Navbar';
import Footer from './app/components/Footer';
import Home from './app/page'; // Importa tu página principal
import './app/globals.css'; // Importa los estilos globales

function App() {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Home /> {/* Renderiza tu página principal */}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}

export default App;