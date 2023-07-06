import { useState, useEffect } from 'react';

const SwitchTheme = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const theme = isChecked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div className="navbar-toggle">
      <input
        type="checkbox"
        id="switch"
        name="theme"
        className="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="switch">Toggle</label>
      <h2>{isChecked ? 'Light Mode' : 'Dark Mode'}</h2>
    </div>
  );
};

export default SwitchTheme;
