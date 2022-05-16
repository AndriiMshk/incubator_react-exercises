import React, { useEffect, useState } from 'react';
import './selector2.css';

export const Select2 = () => {

  const items: string[] = ['qqq', 'ww', 'ee', 'rrr', 'uuu'];

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>(items[0]);
  const [hoveredItem, setHoveredItem] = useState<number>(0);

  const onPressKeyHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        setHoveredItem(hoveredItem + 1);
        if (hoveredItem >= items.length - 1) {
          setHoveredItem(items.length - 1);
        }

        break;
      case 'ArrowUp':
        setHoveredItem(hoveredItem - 1);
        if (hoveredItem <= 1) {
          setHoveredItem(0);
        }
        break;
      case 'Enter':
        setActiveItem(items[hoveredItem]);
        setCollapsed(!collapsed);
        break;
      case 'Escape':
        setCollapsed(false);
        break;
    }
  };

  useEffect(() => setActiveItem(items[hoveredItem]), [hoveredItem])

  return (<div>
      <select>
        {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
      </select>
      <div
        className={'main'}
        tabIndex={0}
        onBlur={() => setCollapsed(false)}
        onKeyDown={(event) => onPressKeyHandler(event)}
      >
        <div
          className={'items current'}
          onClick={() => setCollapsed(!collapsed)}
        >
          <span>{activeItem}</span><span>⮟</span>
        </div>
        {collapsed &&
        <div
          className={'items'}
        >
          {items.map((item, index) => <div
            key={index}
            className={hoveredItem === index ? 'hover' : ''}
            onClick={() => {
              setActiveItem(item);
              setCollapsed(false);
              setHoveredItem(index)
            }}
          >
            {item}
          </div>)}
        </div>}
      </div>

    </div>
  );
};
