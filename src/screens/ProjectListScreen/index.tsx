import styled from "@emotion/styled";
import {
  ButtonNoPadding,
  ErrorBox,
  Row,
  ScreenContainer,
} from "components/lib";
import { useDebounce } from "utils";
import { useProjects } from "utils/project";
import { useDocumentTitle } from "utils/useDocumentTitle";
import { useUser } from "utils/user";
import { List } from "./List";
import { SearchPanel } from "./SearchPanel";
import { useProjectModal, useProjectsSearchParams } from "./util";

export const ProjectListScreen = () => {
  useDocumentTitle("Project list", false);
  const { open } = useProjectModal();
  const [param, setParam] = useProjectsSearchParams();
  const { isLoading, error, data: list } = useProjects(useDebounce(param, 200));
  const { data: users } = useUser();

  return (
    <ScreenContainer>
      <Row between={true}>
        <h1>Project list</h1>
        <ButtonNoPadding type={"link"} onClick={open}>
          Create project
        </ButtonNoPadding>
      </Row>

      <SearchPanel
        users={users || []}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <ErrorBox error={error} />
      <List
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      ></List>
    </ScreenContainer>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;
