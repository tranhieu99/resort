import styled from 'styled-components';

const StyledHero = styled.header`
    background: url(${props => props.img}) center no-repeat;
    background-size: cover;
    min-height: 70vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export default StyledHero;