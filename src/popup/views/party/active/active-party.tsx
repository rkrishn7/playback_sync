import React, { useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Flex, Text } from 'rebass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faClipboardCheck, faUserPlus, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

import styled from '@root/style/styled';
import theme from '@root/style/theme';

import { StoreState } from '@popup/store';
import { Input } from '@popup/components/input';
import { IconButton } from '@popup/components/icon-button';

import { Profile } from './profile';
import { UserList } from './user-list';

const Container = styled(Flex)`
  flex-direction: column;
  min-width: 100%;
`;

const mapState = (state: StoreState) => {
  return {
    joinUrl: state.party.joinUrl,
  };
};

const connector = connect(mapState, null);

type ReduxProps = ConnectedProps<typeof connector>;

const ActiveParty: React.FC<ReduxProps> = ({ joinUrl }) => {
  const roomDisplayRef = useRef<HTMLInputElement>();
  const [copiedJoinUrl, setCopiedJoinUrl] = useState(false);

  const handleCopyClick = () => {
    if (roomDisplayRef) {
      roomDisplayRef.current!.select();
      document.execCommand('copy');
      setCopiedJoinUrl(true);
    }
  };

  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>
            <FontAwesomeIcon icon={faUserPlus} size="lg" />
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faUsers} size="lg" />
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faCog} size="lg" />
          </Tab>
        </TabList>
        {/* Join Link */}
        <TabPanel>
          {joinUrl && (
            <Flex flexDirection="column">
              <Text fontSize={1} color="greyDark" ml={1} mb={1} fontWeight={700}>
                join url
              </Text>
              <Flex flexDirection="row" alignItems="center">
                <Input value={joinUrl} readOnly ref={roomDisplayRef} />
                <IconButton onClick={handleCopyClick} style={{ marginLeft: theme.space[1] }}>
                  <FontAwesomeIcon icon={copiedJoinUrl ? faClipboardCheck : faClipboard} size="2x" />
                </IconButton>
              </Flex>
            </Flex>
          )}
        </TabPanel>
        {/* Party Users */}
        <TabPanel>
          <UserList />
        </TabPanel>
        {/* Profile Settings */}
        <TabPanel>
          <Profile />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default connector(ActiveParty);
