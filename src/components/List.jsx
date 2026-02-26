import Card from './Card';

// Componente que mapea y renderiza el array de cafés
function List({ coffees }) {
  // Si no hay cafés, mostrar mensaje vacío
  if (coffees.length === 0) {
    return (
      <div className="empty-state">
        <p>No se encontraron cafés. Intenta ajustar tus filtros.</p>
      </div>
    );
  }

  return (
    <div className="coffee-grid">
      {coffees.map((coffee) => (
        <Card
          key={coffee.id}
          image={coffee.image}
          name={coffee.name}
          price={coffee.price}
          rating={coffee.rating}
          votes={coffee.votes}
          popular={coffee.popular}
          available={coffee.available}
        />
      ))}
    </div>
  );
}

export default List;
