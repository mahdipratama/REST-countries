import { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

const FilterRegion = () => {
  const { regions, FilterRegions } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('');

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleClick = region => {
    FilterRegions(region);
    setIsOpen(!isOpen);

    setCurrentRegion(region);
  };

  return (
    <div ref={ref} className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{currentRegion || 'Filter by Region'}</span>
        <i className="fa-solid fa-chevron-down fa-sm"></i>
      </button>
      <div className="menu">
        {regions.map((region, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => handleClick(region)}>
              {region}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterRegion;
