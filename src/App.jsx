import { useState, useEffect } from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import List from './components/List';
import Skeleton from './components/Skeleton';

// Datos de ejemplo (simulan la API)
const MOCK_COFFEES = [
  {
    id: 1,
    name: "Espresso Rubio",
    price: "$4.99",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=300&h=300&fit=crop",
    rating: 4.5,
    votes: 45,
    popular: true,
    available: true
  },
  {
    id: 2,
    name: "Origen Único",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop",
    rating: 4.8,
    votes: 62,
    popular: false,
    available: true
  },
  {
    id: 3,
    name: "Café Helado",
    price: "$3.99",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop",
    rating: 4.2,
    votes: 34,
    popular: false,
    available: false
  },
  {
    id: 4,
    name: "Capuchino",
    price: "$4.50",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
    rating: 4.6,
    votes: 58,
    popular: true,
    available: true
  },
  {
    id: 5,
    name: "Maquiato",
    price: "$5.49",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
    rating: 4.7,
    votes: 41,
    popular: false,
    available: true
  },
  {
    id: 6,
    name: "Americano",
    price: "$3.49",
    image: "https://images.pexels.com/photos/16394865/pexels-photo-16394865/free-photo-of-black-coffee.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
    rating: null,
    votes: 0,
    popular: false,
    available: true
  },
  {
    id: 7,
    name: "Latte Artístico",
    price: "$5.99",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=300&h=300&fit=crop",
    rating: 4.9,
    votes: 73,
    popular: true,
    available: false
  },
  {
    id: 8,
    name: "Cold Brew",
    price: "$4.25",
    image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?w=300&h=300&fit=crop",
    rating: 4.4,
    votes: 39,
    popular: false,
    available: true
  },
];

function App() {
  // Estado para almacenar los cafés
  const [coffees, setCoffees] = useState([]);
  
  // Estado de carga
  const [loading, setLoading] = useState(true);
  
  // Estado del filtro (lift state up)
  const [filter, setFilter] = useState('all');

  // Fetch de datos cuando el componente se monta
  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        setLoading(true);
        
        // Simulamos un pequeño delay para que se vea el skeleton
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Usamos datos mock
        console.log('Datos cargados:', MOCK_COFFEES);
        setCoffees(MOCK_COFFEES);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  // Filtrar cafés según el estado del filtro
  const filteredCoffees = filter === 'available' 
    ? coffees.filter((coffee) => coffee.available)
    : coffees;

  // Cambiar el filtro (evento desde FilterBar)
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Nuestra Colección</h1>
        <p>Te presentamos nuestra Colección de Café, una selección de cafés únicos de todo el mundo.</p>
      </header>

      {/* Filtros */}
      <FilterBar activeFilter={filter} onFilterChange={handleFilterChange} />

      {/* Mostrar Skeleton mientras carga */}
      {loading ? (
        <Skeleton />
      ) : (
        /* Mostrar lista de cafés */
        <List coffees={filteredCoffees} />
      )}
    </div>
  );
}

export default App;
