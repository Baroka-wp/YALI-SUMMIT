'use client'
import { useState } from 'react'
import { FaCommentAlt, FaTimes, FaPaperPlane } from 'react-icons/fa'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const sendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      console.log('Message sent:', message)
      setMessage('')  // Clear the message input after sending
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaCommentAlt size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg w-80 p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Assistant</span>
            <button onClick={toggleChat} className="text-gray-500">
              <FaTimes size={20} />
            </button>
          </div>
          <div className="space-y-3 h-40 overflow-y-auto p-2 border border-gray-300 rounded-lg">
            {/* Messages will appear here */}
            <div className="text-gray-600">Hello! How can I assist you today?</div>
            {/* Add more messages dynamically */}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              <FaPaperPlane size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LiveChat
