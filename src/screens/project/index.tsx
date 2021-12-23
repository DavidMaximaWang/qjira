import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router";
import { Navigate } from "react-router";
import { KanbanScreen } from "screens/kanban";
import { EpicScreen } from "screens/epic";
import styled from "@emotion/styled";
import { Menu } from "antd";

const useRouteType = () => {
  const units = useLocation().pathname.split("/");
  return units[units.length - 1];
};

export const ProjectScreen = () => {
  const routeType = useRouteType();

  return (
    <Container>
      <Aside>
        <Menu mode={"inline"} selectedKeys={[routeType]}>
          <Menu.Item key={"kanban"}>
            <Link to={"../kanban"}>board</Link>
          </Menu.Item>
          <Menu.Item key={"epic"}>
            <Link to={"../epic"}>task group</Link>
          </Menu.Item>
        </Menu>
      </Aside>
      <Main>
        <Routes>
          <Route path={"kanban"} element={<KanbanScreen />} />
          <Route path={"epic"} element={<EpicScreen />} />
          <Route element={<Navigate to={"kanban"} replace={true} />} />
        </Routes>
      </Main>
    </Container>
  );
};

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: rgb(244, 245, 247);
`;

const Main = styled.main`
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  width: 100%;
  overflow: hidden;
`;
