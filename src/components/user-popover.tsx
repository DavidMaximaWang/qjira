import styled from "@emotion/styled";
import { List, Popover, Typography } from "antd";
import React from "react";
import { useUser } from "utils/user";

export const UserPopover = () => {
  const { data: users } = useUser();
  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>users list</Typography.Text>
      <List>
        {users?.map((user) => {
          return (
            <List.Item key={user.id}>
              <List.Item.Meta title={user.name} />
            </List.Item>
          );
        })}
      </List>
    </ContentContainer>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      Users
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
