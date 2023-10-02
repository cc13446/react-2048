const MessageView = ({message}) => {
    return (
      <div className="text-xl p-2 text-gray-300 rounded-xl inline-block bg-transparent cursor-pointer hover:bg-teal-600">
        {message}
      </div>
    );
};



export default MessageView;
