import styled from "styled-components";

export const DashboardHead = styled.div`
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.dark_alpha_01};
`;

export const SectionTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;