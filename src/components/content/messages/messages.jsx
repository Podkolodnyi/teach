import cs from "./messages.module.css"

const Messages = (props) => {
    return (
      <div className={cs.messagesWrap}>
          <div className={cs.name}>
              {props.user}
          </div>
          <div className={cs.message}>
              {props.message}
          </div>
      </div>
    );
}

export default Messages;