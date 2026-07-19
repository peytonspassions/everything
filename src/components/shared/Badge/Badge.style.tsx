import styled from 'styled-components';
import AppStyles from 'styles';

const Container = styled.div`
    font-size: 10px;
    border: 1px solid ${AppStyles.colors.green};
    color: ${AppStyles.colors.green};
    padding: 3px 6px;
    border-radius: 10px;
    background-color: ${AppStyles.colors.lightGreen};
    white-space: nowrap;
`;

export const BadgeStyles = {
    Container,
};
