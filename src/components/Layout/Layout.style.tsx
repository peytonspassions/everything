import styled from 'styled-components';
import AppStyles from 'styles';

const Container = styled.div`
    height: 100%;
    display: flex;
`;

const PageContent = styled.div`
    height: 100%;
    width: 100%;
    margin: 2rem;
`;

const PageHeader = styled.div`
    text-transform: capitalize;
    font-size: 38px;
    font-family: ${AppStyles.fonts.cursive};
    border-bottom: 1px solid ${AppStyles.colors.black};
`;

export const LayoutStyles = { Container, PageContent, PageHeader };
