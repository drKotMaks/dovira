import React from 'react';

const ItemUnivers = ({title, description}) => {
  return (
    <div className='flex text-base pt-3'>
      <p className='font-semibold'>{title}:</p>
      <p>{description}</p>

    </div>
  );
};

export default ItemUnivers;