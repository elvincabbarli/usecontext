import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme';

const ThemePage = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeDark = () => {
        setTheme('dark');
        localStorage.setItem("theme", 'dark');
    };

    const changeLight = () => {
        setTheme('light');
        localStorage.setItem("theme", 'light');
    };
    return (
        <main className={theme === 'dark' ? "dark" : "light"}>
            <div>
                &nbsp;&nbsp;
                <button className="dark-btn" onClick={changeDark}>Dark</button> &nbsp;&nbsp;&nbsp;
                <button className="light-btn" onClick={changeLight}>Light</button>
            </div>
            <div>
                <h1>Heading 1</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
                    cum hic culpa illo deleniti dolores ducimus repudiandae autem,
                    voluptatibus possimus?
                </p>
            </div>
        </main>
    )
}

export default ThemePage