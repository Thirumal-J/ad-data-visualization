import styled from 'styled-components';
import { Breakpoints, MaxMediaQuery } from '../../../styles/breakpoints';

export const ChartBox = styled.div`
    display: flex;
    margin: 20px;

    ${MaxMediaQuery(Breakpoints.desktop)} {
        display: block;
    }
`;

export const ChartCard = styled.div`
    width: 100%;
    padding: 10px;
`;

export const Title = styled.div`
    ${({ theme }) => theme.typography.sectionTitle};
    text-transform: none;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
`;

export const Text = styled.div`
    margin: auto;
    width: fit-content;
    cursor: pointer;
    &:hover {
        color: red;
        text-decoration: underline;
    }
`;
