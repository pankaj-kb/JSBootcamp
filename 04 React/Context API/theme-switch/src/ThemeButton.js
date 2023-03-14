import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
const { theme, toggleTheme } = useContext(ThemeContext);

return (
<button onClick={toggleTheme}>
{theme === 'light' ? 'Dark' : 'Light'} Theme
</button>
);
};

export default ThemeButton;