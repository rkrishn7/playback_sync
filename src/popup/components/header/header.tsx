import React from 'react';
import { Flex } from 'rebass';

import { Brand } from '@root/components/brand';
import styled from '@root/style/styled';

const HeaderContainer = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
  padding-top: ${p => p.theme.space[2]}px;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: ${p => p.theme.space[2]}px;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Brand color="primary" headingProps={{ fontWeight: 600 }} width="100%" display="flex" ml={2} alignSelf="center" />
      <Logo src="/couchsync-128.png" />
    </HeaderContainer>
  );
};
