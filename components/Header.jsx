import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <Navigation>
                <Logo>Логотип</Logo>
                <Title>MetaForm</Title>
                <NavLinks>
                    <Link href="/">Главная</Link>
                    <Link href="/portfolio">Портфолио</Link>
                    <Link href="/order">Заказ</Link>
                </NavLinks>
            </Navigation>
            <Banner>
                <h2>Разработка 3d-моделей</h2>
                <h2>От людей для людей</h2>
                <h4>Визуализация как образ мышления.<br></br>
Сделать сложное доступным, а невидимое - наглядным.</h4>

                <button></button>
                <button></button>
            </Banner>
        </Wrapper>
    );
};

export default Header;






// Стили

const Wrapper = styled.header` width: 100%; display: flex; flex-direction: column; `;

const Navigation = styled.nav` background-color: #f8f9fa; // Цвет фона навигационной панели padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; `;

const Logo = styled.div` font-size: 24px; color: #343a40; // Цвет текста логотипа `;

const Title = styled.h1` margin-left: 15px; font-size: 18px; color: #212529; // Цвет названия студии `;

const NavLinks = styled.ul` list-style-type: none; display: flex; gap: 20px; `;

const Link = styled.a` text-decoration: none; color: #007bff; // Цвет ссылок &:hover { text-decoration: underline; } `;

const Banner = styled.div` height: 200px; // Высота баннера background-color: #e9ecef; // Цвет фона баннера display: flex; align-items: center; justify-content: center; font-size: 32px; color: #495057; // Цвет текста на баннере `;