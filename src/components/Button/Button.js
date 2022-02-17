import React from 'react';

const Button = ({ images, onClick}) => {
    

    return (
      <>
        {images && (
          <button type="button" onClick={onClick} className="button">
            <span className="button-label">Load more</span>
          </button>
        )}
      </>
    );
            
    }


export default Button;
