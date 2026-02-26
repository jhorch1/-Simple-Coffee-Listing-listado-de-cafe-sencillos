// Componente con botones de filtro
function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      <button
        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        Todos los Productos
      </button>
      <button
        className={`filter-btn ${activeFilter === 'available' ? 'active' : ''}`}
        onClick={() => onFilterChange('available')}
      >
        Disponibles Ahora
      </button>
    </div>
  );
}

export default FilterBar;
