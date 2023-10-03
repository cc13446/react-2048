const MessageView = ({ message, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="text-xl p-2 text-gray-300 rounded-xl inline-block bg-transparent cursor-pointer hover:bg-teal-600 select-none"
        >
            {message}
        </div>
    );
};

export default MessageView;
