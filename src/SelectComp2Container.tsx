import React, { useState } from 'react';
import './selector.css';

export const SelectComp2Container = () => {

  const items: { id: number, title: string }[] = [
    { id: 1, title: 'qqq' },
    { id: 2, title: 'www' },
    { id: 3, title: 'eee' },
    { id: 4, title: 'rrr' },
  ];

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>(items[0].title);
  const [hoveredItem, setHoveredItem] = useState<number>(1);

  const makeActiveItem = (itemId: number) => {
    let currentItem = items.find(item => item.id === itemId);
    if (currentItem) {
      setActiveItem(currentItem.title);
    }
    setCollapsed(true);
  };

  const makeHoveredItem = (itemId: number) => {
    let currentItem = items.find(item => item.id === itemId);
    if (currentItem) {
      setHoveredItem(currentItem.id);
    }
  };

  const onClickHandler = (itemTitle: string) => {
    setActiveItem(itemTitle);
    setCollapsed(false);
  };

  const onPressKeyHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        setHoveredItem(hoveredItem + 1);
        if (hoveredItem >= items.length) {
          setHoveredItem(items.length);
        }
        makeActiveItem(hoveredItem + 1);
        if (!collapsed) {
          setCollapsed(false);
        }
        break;
      case 'ArrowUp':
        setHoveredItem(hoveredItem - 1);
        if (hoveredItem <= 1) {
          setHoveredItem(1);
        }
        makeActiveItem(hoveredItem - 1);
        if (!collapsed) {
          setCollapsed(false);
        }
        break;
      case 'Enter':
        makeActiveItem(hoveredItem);
        setCollapsed(!collapsed);
        break;
      case 'Escape':
        setCollapsed(false);
        break;
    }
  };

  return (<div>
      <select>
        {items.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
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
          {items.map((item) => <div
            key={item.id}
            className={hoveredItem === item.id ? 'hover' : ''}
            onClick={() => onClickHandler(item.title)}
            onKeyDown={(event) => onPressKeyHandler(event)}
            onMouseEnter={() => makeHoveredItem(item.id)}
          >
            {item.title}
          </div>)}
        </div>}
      </div>
    </div>
  );
};
