import cs from "./messages.module.css"
import DialogName from "./dialogname/dname";
import DialogMessage from "./message/message";

const Messages = (props) => {
    let dialogsData = [
        {id: 1, name: "vasya"},
        {id: 2, name: "liza"},
        {id: 3, name: "vlad"}
    ];

    let messagesData = [
        {id: 1, message: "hello"},
        {id: 2, message: "hi"},
        {id: 3, message: "hello"}
    ];

    let dialogname = dialogsData.map(user => <DialogName name = {user.name} id = {user.id} />);
    let dialogMessage = messagesData.map(m => <DialogMessage message = {m.message} id = {m.id}/>);
    return (
      <div className={cs.messagesWrap}>
          <div className={cs.name}>
              {dialogname}
          </div>
          <div className={cs.message}>
              {dialogMessage}
          </div>
      </div>
    );
}

export default Messages;