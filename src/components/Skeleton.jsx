// Componente que muestra tarjetas simuladas mientras carga
function Skeleton() {
  return (
    <div className="coffee-grid">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-price"></div>
            <div className="skeleton-rating"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
