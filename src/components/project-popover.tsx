import React from "react";
import { List, Popover, Typography } from "antd";
import { useProjects } from "utils/project";
import styled from "@emotion/styled";
import { ButtonNoPadding } from "./lib";
import { useProjectModal } from "screens/ProjectListScreen/util";

export const ProjectPopover = () => {
  const { data: projects, refetch } = useProjects();
  const { open } = useProjectModal();
  const pinnedProjects = projects?.filter((project) => project.pin);
  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>favorit project</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => {
          return (
            <List.Item key={project.id}>
              <List.Item.Meta title={project.name} />
            </List.Item>
          );
        })}
        <ButtonNoPadding type={"link"} onClick={open}>
          Create project
        </ButtonNoPadding>
      </List>
    </ContentContainer>
  );
  return (
    <Popover
      onVisibleChange={() => refetch()}
      placement={"bottom"}
      content={content}
    >
      projects
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
