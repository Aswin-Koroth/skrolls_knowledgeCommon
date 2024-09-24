const MessageBubble = ({ message, type, isSentByMe, timestamp }) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const renderMessageContent = () => {
    switch (type) {
      case 'text':
        return message.split('\n').map((line, index) => (
          <span key={index} className="whitespace-pre-wrap">
            {line}
            <br />
          </span>
        ));
      case 'image':
        return (
          <img
            src={message.data}
            alt={message.name || 'Image'}
            className="max-w-96 rounded-lg"
          />
        );
      case 'video':
        return (
          <video controls className="max-w-96 rounded-lg">
            <source src={message.data} type={message.type} />
            Your browser does not support the video tag.
          </video>
        );
      case 'file':
        return (
          <a
            href={message.data}
            download={message.name}
            className="text-blue-500 underline"
          >
            {message.name}
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex w-full ${isSentByMe ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`mb-2 w-fit max-w-lg rounded-lg p-2 ${
          isSentByMe
            ? 'self-end bg-primary pr-5 text-bg-secondary'
            : 'self-start bg-secondary pl-5'
        } `}
      >
        <div className="message-text">{renderMessageContent()}</div>

        <div
          className={`pt-1 text-right text-[0.6rem] select-none ${
            isSentByMe ? 'text-border-muted' : 'text-text-secondary'
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
