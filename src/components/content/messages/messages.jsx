import cs from "./messages.module.css"
import DialogName from "./dialogname/dname";
import DialogMessage from "./message/message";

const Messages = (props) => {
    let dialogName = props.messagesPage.dialogsData.map(user => <DialogName name = {user.name} id = {user.id} />);
    let dialogMessage = props.messagesPage.messagesData.map(m => <DialogMessage message = {m.message} id = {m.id}/>);

    return (
      <div className={cs.messagesWrap}>
          <div className={cs.name}>
              {dialogName}
          </div>
          <div className={cs.message}>
              {dialogMessage}
          </div>
      </div>
    );
}

export default Messages;