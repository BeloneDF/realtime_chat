import { PrettyChatWindow } from "react-chat-engine-pretty";
import { variables } from "./variables";
const ChatsPage = (props) => {

  return (
    <div className="background">
      <PrettyChatWindow
        projectId={variables.projectId}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};


export default ChatsPage;