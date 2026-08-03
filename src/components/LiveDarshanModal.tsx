"use client";

import { useState } from "react";
import { X, Tv, Eye, Volume2, VolumeX, Sparkles, MessageSquare, Play } from "lucide-react";

interface LiveDarshanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveDarshanModal({ isOpen, onClose }: LiveDarshanModalProps) {
  const [selectedCam, setSelectedCam] = useState("garbhagriha");
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState([
    { name: "Ramesh Sharma (Patna)", text: "Jai Bajrangbali! Blessed morning darshan." },
    { name: "Pooja Verma (Delhi)", text: "Jai Shree Ram! Pranam from Delhi." },
    { name: "Amit Kumar (Mumbai)", text: "Sankat Mochan Haro Sabke Dukh." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  if (!isOpen) return null;

  const cameras = [
    { id: "garbhagriha", label: "Twin Hanuman Sanctum (मुख्य गर्भगृह)" },
    { id: "ramdarbar", label: "Ram Darbar & Sita Temple (राम दरबार)" },
    { id: "aarti", label: "Main Courtyard & Aarti Platform" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { name: "Devotee (You)", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-950 text-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-amber-500/30 relative overflow-hidden max-h-[95vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shrink-0"></span>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-200">
                24x7 HD Live Darshan • Mahavir Mandir Patna
              </h3>
              <p className="text-xs text-white/70">
                Live Garbhagriha Feed • Morning Aarti & Evening Sandhya Aarti Stream
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Camera Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cameras.map((cam) => (
            <button
              key={cam.id}
              onClick={() => setSelectedCam(cam.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCam === cam.id
                  ? "bg-saffron-600 text-white shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {cam.label}
            </button>
          ))}
        </div>

        {/* Video Player & Live Chat Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Player Container */}
          <div className="lg:col-span-8 bg-black rounded-2xl relative overflow-hidden aspect-video border border-white/10 flex items-center justify-center group">
            
            {/* Animated Simulated Live Video Backdrop */}
            <img
              src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=80&w=900"
              alt="Live Darshan Stream"
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

            {/* Live Indicator overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-red-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                LIVE STREAM
              </span>
              <span className="bg-black/60 backdrop-blur-md text-amber-300 font-semibold text-xs px-2.5 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                <Eye className="w-3 h-3" /> 14,820 Watching
              </span>
            </div>

            {/* Mute Control */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-saffron-600 transition-colors border border-white/20"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <div className="absolute bottom-4 left-4 text-xs font-semibold text-amber-200 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
              Aarti Chanting Sound: {isMuted ? "Muted" : "Playing Live Audio"}
            </div>
          </div>

          {/* Devotee Live Prayer Chat Box */}
          <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-3 border border-white/10 flex flex-col justify-between h-[280px] lg:h-auto">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-xs font-bold text-amber-300">
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" /> Devotee Prayer Wall
                </span>
                <span className="text-[10px] text-white/60">Live Updates</span>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-[180px] lg:max-h-[220px] pr-1">
                {messages.map((msg, i) => (
                  <div key={i} className="bg-white/5 p-2 rounded-xl text-xs">
                    <span className="font-bold text-saffron-400 block text-[11px]">{msg.name}</span>
                    <span className="text-white/90">{msg.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="mt-2 flex gap-1.5">
              <input
                type="text"
                placeholder="Write Jai Bajrangbali..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-saffron-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-xl bg-saffron-600 hover:bg-saffron-500 text-white font-bold text-xs shrink-0"
              >
                Send
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
