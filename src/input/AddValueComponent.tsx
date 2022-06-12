import React from 'react';

interface AddValueComponentPropsType {
  value: any
  error: any
  onChange: any
  onKeyPress: any
  onClick: any
}

export const AddValueComponent: React.FC<AddValueComponentPropsType> = ({
  value,
  error,
  onChange,
  onKeyPress,
  onClick
}) => {
  return (
    <div>
      <h4>{error ? `Add text: ${error}` : 'Add text'}</h4>
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress} />
      <button onClick={onClick}>+</button>
    </div>
  )
}