import React, { useState } from "react";
import {
  FaSearch,
  FaVideo,
  FaPhone,
  FaEllipsisV,
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
} from "react-icons/fa";

const RecentMatchItem = ({ avatar, name }) => (
  <div className="flex-shrink-0 text-center">
    <div className="w-12 h-12 rounded-full overflow-hidden mb-1">
      <img src={avatar} alt={name} className="w-full h-full object-cover" />
    </div>
    <span className="text-xs text-gray-600 block truncate w-12">{name}</span>
  </div>
);

const ConversationItem = ({
  avatar,
  name,
  lastMessage,
  time,
  unreadCount,
  isActive = false,
  onClick,
}) => (
  <div
    className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer ${
      isActive ? "bg-blue-50 border-r-2 border-blue-500" : ""
    }`}
    onClick={onClick}
  >
    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
      <img src={avatar} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
        {unreadCount && (
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
            {unreadCount}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 truncate mt-1">{lastMessage}</p>
    </div>
  </div>
);

const MessageBubble = ({ message, isOwn, time, isTyping = false }) => (
  <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
    <div
      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
        isOwn
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {isTyping ? (
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      ) : (
        <p className="text-sm">{message}</p>
      )}
      {time && (
        <p
          className={`text-xs mt-1 ${
            isOwn ? "text-purple-100" : "text-gray-500"
          }`}
        >
          {time}
        </p>
      )}
    </div>
  </div>
);

export default function MessagingInterface() {
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState("Anna Hamidul");
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showChat, setShowChat] = useState(false);

  const recentMatches = [
    {
      id: 1,
      name: "Kate",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sarah",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emma",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Lisa",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const conversations = [
    {
      id: 1,
      name: "Ali Rosa",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      lastMessage: "Your travel photos are amazing! Which camera do yo...",
      time: "2m",
      unreadCount: null,
      isActive: true,
    },
    {
      id: 2,
      name: "Grant Anna",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      lastMessage: "Your travel photos are amazing! Which camera do yo...",
      time: "5m",
      unreadCount: 3,
    },
    {
      id: 3,
      name: "Grant Anna",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      lastMessage: "Your travel photos are amazing! Which camera do yo...",
      time: "1h",
      unreadCount: 2,
    },
    {
      id: 4,
      name: "Grant Anna",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      lastMessage: "Your travel photos are amazing! Which camera do yo...",
      time: "2h",
      unreadCount: 1,
    },
    {
      id: 5,
      name: "Grant Anna",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      lastMessage: "Your travel photos are amazing! Which camera do yo...",
      time: "3h",
      unreadCount: 5,
    },
    {
      id: 6,
      name: "Grant Anna",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
      lastMessage: "Your travel photos are amazing! Which camera do yo...",
      time: "1d",
      unreadCount: 2,
    },
    {
      id: 7,
      name: "Grant Anna",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      lastMessage: "Your travel photos are amazing! Which camera do yo...",
      time: "2d",
      unreadCount: 1,
    },
  ];

  const messages = [
    {
      id: 1,
      message: "Hi there, how are you doing? I have a nice question",
      isOwn: true,
      time: "2:30 PM",
    },
    { id: 2, message: "Hello Miranda!", isOwn: false, time: "2:31 PM" },
    {
      id: 3,
      message:
        "Hello Miranda! Here are some nice latest holographic display technology?",
      isOwn: false,
      time: "2:32 PM",
    },
    { id: 4, message: "Hello Miranda!", isOwn: true, time: "2:33 PM" },
    {
      id: 5,
      message:
        "Hi Kelly, hello, how are you doing? I have a nice question about technology",
      isOwn: true,
      time: "2:34 PM",
    },
  ];

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    setSelectedUser(conversation.name);
    setShowChat(true);
  };

  const handleBackToMessages = () => {
    setShowChat(false);
    setSelectedConversation(null);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex h-[95vh] bg-white lg:px-12 p-4">
      {/* Sidebar - Hidden on mobile when chat is open */}
      <div
        className={`w-full md:w-80 border-r border-gray-200 flex flex-col ${
          showChat ? "hidden md:flex" : "flex"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
            <FaSearch className="text-gray-400 cursor-pointer" />
          </div>

          {/* Recent matches */}
          <div>
            <p className="text-sm text-gray-500 mb-3">
              Recent matches you haven't messaged
            </p>
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {recentMatches.map((match) => (
                <RecentMatchItem key={match.id} {...match} />
              ))}
            </div>
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              {...conversation}
              isActive={selectedConversation?.id === conversation.id}
              onClick={() => handleConversationClick(conversation)}
            />
          ))}
        </div>
      </div>

      {/* Main Chat Area - Hidden on mobile when no chat is selected */}
      <div
        className={`flex-1 flex flex-col ${
          !showChat ? "hidden md:flex" : "flex"
        }`}
      >
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                {/* Back button for mobile */}
                <button
                  className="md:hidden mr-3 text-gray-600"
                  onClick={handleBackToMessages}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src={selectedConversation.avatar}
                    alt={selectedConversation.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {selectedConversation.name}
                  </h2>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaVideo className="text-gray-400 cursor-pointer hover:text-gray-600" />
                <FaPhone className="text-gray-400 cursor-pointer hover:text-gray-600" />
                <div className="text-gray-500 text-xs hidden sm:block">
                  View Profile
                </div>
                <FaEllipsisV className="text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} {...msg} />
              ))}
              <MessageBubble isTyping={true} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <FaPaperclip className="text-gray-400 cursor-pointer hover:text-gray-600" />
                    <FaSmile className="text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <button
                  onClick={handleSendMessage}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition-colors"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* No conversation selected - desktop only */
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <FaSearch className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">
                Select a conversation
              </h3>
              <p>Choose a conversation from the sidebar to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
