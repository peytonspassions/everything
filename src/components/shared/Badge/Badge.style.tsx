import styled from 'styled-components';
import AppStyles from 'styles';

const Container = styled.div`
    font-size: 10px;
    border: 1px solid ${AppStyles.colors.purple};
    color: ${AppStyles.colors.purple};
    padding: 3px 6px;
    border-radius: 10px;
    background-color: rgb(from ${AppStyles.colors.purple} r g b / 0.3);
    white-space: nowrap;
`;

export const BadgeStyles = {
    Container,
};
