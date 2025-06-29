'use client'
import React, { useState } from 'react'
import {
  Users,
  Plus,
  Lock,
  Copy,
  Share2,
  Crown,
  Timer,
  Zap,
  UserCheck,
  Settings,
  Eye,
  EyeOff,
  Link,
  Send,
  Shield,
  Clock,
  Gamepad2,
} from 'lucide-react'

const samplePlayers = [
  { id: 1, name: 'Alex', avatar: '🎮', score: 1250, isHost: true, status: 'ready' },
  { id: 2, name: 'Sarah', avatar: '🌟', score: 980, isHost: false, status: 'ready' },
  { id: 3, name: 'Mike', avatar: '🔥', score: 1100, isHost: false, status: 'waiting' },
]

export default function PrivateRoomsSection() {
  const [activeTab, setActiveTab] = useState('create')
  const [roomCode] = useState('ABC123')
  const [roomName, setRoomName] = useState('')
  const [maxPlayers, setMaxPlayers] = useState(6)
  const [timeLimit, setTimeLimit] = useState(30)
  const [joinCode, setJoinCode] = useState('')
  const [isCodeVisible, setIsCodeVisible] = useState(false)
  const [gameMode, setGameMode] = useState('classic')

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode)
    // You could add a toast notification here
  }

  const handleShareRoom = () => {
    const shareUrl = `https://yourgame.com/room/${roomCode}`
    navigator.clipboard.writeText(shareUrl)
    // You could add a toast notification here
  }

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-8 h-8 text-[#ff651b]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white game-title">Private Rooms</h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6">
            Create secure private rooms and invite friends for exclusive gaming sessions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffa430] to-[#ff651b] mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center items-center">
          <div className="space-y-8 w-[70vw]">
            {/* Tab Navigation */}
            <div className="flex bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
              <button
                onClick={() => setActiveTab('create')}
                className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'create'
                    ? 'bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Plus className="w-5 h-5" />
                Create Private Room
              </button>
              <button
                onClick={() => setActiveTab('join')}
                className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'join'
                    ? 'bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <UserCheck className="w-5 h-5" />
                Join Private Room
              </button>
            </div>

            {/* Create Room Content */}
            {activeTab === 'create' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6 game-title flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#ff651b]" />
                    Setup Your Private Room
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column - Room Settings */}
                    <div className="space-y-4">
                      {/* Room Name */}
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">Room Name</label>
                        <input
                          type="text"
                          value={roomName}
                          onChange={(e) => setRoomName(e.target.value)}
                          placeholder="Alex's Game Night"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Max Players */}
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">
                          Max Players
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="range"
                            min="2"
                            max="10"
                            value={maxPlayers}
                            onChange={(e) => setMaxPlayers(Number(e.target.value))}
                            className="flex-1 accent-[#ff651b]"
                          />
                          <div className="bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 min-w-[60px] text-center">
                            <span className="text-[#ff651b] font-bold">{maxPlayers}</span>
                          </div>
                        </div>
                      </div>

                      {/* Time Limit */}
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">
                          Time per Round (seconds)
                        </label>
                        <select
                          value={timeLimit}
                          onChange={(e) => setTimeLimit(Number(e.target.value))}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-[#ff651b] focus:outline-none transition-all duration-300"
                        >
                          <option value="15">15 seconds</option>
                          <option value="30">30 seconds</option>
                          <option value="45">45 seconds</option>
                          <option value="60">60 seconds</option>
                          <option value="90">90 seconds</option>
                        </select>
                      </div>

                      {/* Game Mode */}
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">Game Mode</label>
                        <div className="space-y-2">
                          {['classic', 'speed', 'elimination'].map((mode) => (
                            <label key={mode} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="gameMode"
                                value={mode}
                                checked={gameMode === mode}
                                onChange={(e) => setGameMode(e.target.value)}
                                className="accent-[#ff651b]"
                              />
                              <span className="text-gray-300 capitalize">{mode} Mode</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Privacy & Features */}
                    <div className="space-y-4">
                      {/* Privacy Features */}
                      <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                          <Lock className="w-5 h-5 text-yellow-400" />
                          Privacy Features
                        </h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Invite-only access</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Secure room codes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Host controls</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Private chat</span>
                          </div>
                        </div>
                      </div>

                      {/* Room Preview */}
                      <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-[#ff651b]" />
                          Room Preview
                        </h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex justify-between">
                            <span>Players:</span>
                            <span className="text-[#ff651b]">1/{maxPlayers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Time Limit:</span>
                            <span className="text-[#ff651b]">{timeLimit}s</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Mode:</span>
                            <span className="text-[#ff651b] capitalize">{gameMode}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="text-yellow-400">Waiting</span>
                          </div>
                        </div>
                      </div>

                      {/* Current Players Preview */}
                      <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#ff651b]" />
                          Players in Room
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-2xl">👑</span>
                            <span className="text-white font-semibold">You (Host)</span>
                            <span className="ml-auto text-green-400 text-xs">Ready</span>
                          </div>
                          <div className="text-xs text-gray-400 text-center py-2">
                            Waiting for friends to join...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Create Button */}
                  <button
                    disabled={!roomName.trim()}
                    className="w-full mt-6 bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white py-4 rounded-xl font-bold text-lg game-title hover:shadow-lg hover:shadow-[#ff651b]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Create Private Room
                  </button>
                </div>

                {/* Room Created Success State (you can show this conditionally) */}
                <div className="bg-green-900/20 border border-green-500/30 backdrop-blur-sm rounded-2xl p-6 hidden">
                  <h3 className="text-2xl font-bold text-green-400 mb-4 game-title flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Room Created Successfully!
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Room Code */}
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <label className="block text-gray-300 font-semibold mb-2">Room Code</label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-700 rounded-lg px-4 py-3 font-mono text-2xl text-center text-[#ff651b] tracking-wider border-2 border-[#ff651b]/30">
                          {isCodeVisible ? roomCode : '••••••'}
                        </div>
                        <button
                          onClick={() => setIsCodeVisible(!isCodeVisible)}
                          className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          {isCodeVisible ? (
                            <EyeOff className="w-5 h-5 text-gray-300" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-300" />
                          )}
                        </button>
                        <button
                          onClick={handleCopyCode}
                          className="p-3 bg-[#ff651b] rounded-lg hover:bg-[#ff651b]/80 transition-colors"
                        >
                          <Copy className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Share Options */}
                    <div className="space-y-3">
                      <button
                        onClick={handleShareRoom}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <Link className="w-5 h-5" />
                        Copy Room Link
                      </button>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                        <Send className="w-5 h-5" />
                        Share via Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Join Room Content */}
            {activeTab === 'join' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6 game-title flex items-center gap-2">
                    <UserCheck className="w-6 h-6 text-[#ff651b]" />
                    Join a Private Room
                  </h3>

                  <div className="space-y-6">
                    {/* Room Code Input */}
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        Enter Room Code
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={joinCode}
                          onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                          placeholder="ABC123"
                          maxLength={6}
                          className="flex-1 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-[#ff651b] focus:outline-none transition-all duration-300 font-mono text-xl text-center tracking-wider"
                        />
                        <button
                          disabled={joinCode.length !== 6}
                          className="bg-gradient-to-r from-[#ffa430] to-[#ff651b] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#ff651b]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Join Room
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">
                        Ask your friend for the 6-character room code
                      </p>
                    </div>

                    {/* Features for joiners */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { icon: Lock, title: 'Secure Access', desc: 'Private rooms only' },
                        { icon: Zap, title: 'Real-time Play', desc: 'Instant multiplayer' },
                        { icon: Crown, title: 'Fair Games', desc: 'Host-controlled rules' },
                      ].map((feature, index) => (
                        <div key={index} className="bg-gray-700/30 rounded-xl p-4 text-center">
                          <div className="w-12 h-12 bg-[#ff651b]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <feature.icon className="w-6 h-6 text-[#ff651b]" />
                          </div>
                          <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* How to Join Instructions */}
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                      <h4 className="text-blue-400 font-bold mb-2">How to Join:</h4>
                      <ol className="text-gray-300 text-sm space-y-1">
                        <li>1. Get the room code from your friend</li>
                        <li>2. Enter the 6-character code above</li>
                        <li>3. Click "Join Room" to enter</li>
                        <li>4. Wait for the host to start the game</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff651b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ffa430]/5 rounded-full blur-3xl"></div>

      <style jsx>{`
        .game-title {
          font-family: 'Arial Black', sans-serif;
          letter-spacing: -0.02em;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
