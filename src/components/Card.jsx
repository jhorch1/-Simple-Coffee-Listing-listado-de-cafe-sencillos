// Componente reutilizable para mostrar una tarjeta de café
function Card({ image, name, price, rating, votes, popular, available }) {
  return (
    <div className="coffee-card">
      {/* Imagen del café */}
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
        
        {/* Badge Popular */}
        {popular && (
          <span className="badge-popular">Popular</span>
        )}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <p className="card-price">{price}</p>
        </div>

        {/* Rating */}
        <div className="card-rating">
          {rating ? (
            <>
              <span className="rating-stars">⭐ {rating}</span>
              <span className="rating-votes">({votes} votos)</span>
            </>
          ) : (
            <span className="rating-no">Sin calificaciones</span>
          )}
        </div>

        {/* Estado disponibilidad */}
        <div className="card-availability">
          {available ? (
            <span className="available">Disponible</span>
          ) : (
            <span className="sold-out">Agotado</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
