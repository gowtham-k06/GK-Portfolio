import React, { useState } from 'react';
import { WorldZone } from '../../types/world';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

interface ContactBoardProps {
  zone: WorldZone;
}

export const ContactBoard: React.FC<ContactBoardProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
    }, 4000);
  };

  return (
    <div className="w-full h-full p-6 flex flex-col justify-between rounded-xl bg-[#FFFDF5] relative overflow-hidden text-slate-800 shadow-inner border border-[#EFE8CC]">
      {/* Pinned Pushpin Accent at Top Center */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-md flex items-center justify-center text-white border border-red-700 pointer-events-none z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#EFE8CC] pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FFC700]/20 text-amber-700 flex items-center justify-center border border-[#FFC700]/40">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              COMMUNICATION BOARD
            </h2>
            <p className="text-[10px] font-mono text-slate-400">
              PINNED MEMO & DIRECT INQUIRY
            </p>
          </div>
        </div>

        {/* Vintage Postage Stamp */}
        <div className="w-10 h-11 bg-white border border-dashed border-amber-300 rounded-xs p-1 flex flex-col items-center justify-between shadow-2xs rotate-2">
          <span className="text-[7px] font-mono text-amber-600 font-bold">AIR MAIL</span>
          <span className="text-[9px] font-bold text-slate-700">2026</span>
          <span className="text-[6px] font-mono text-slate-400">PORTFOLIO</span>
        </div>
      </div>

      {/* Main Content: Sticky note & Quick message */}
      <div className="grid grid-cols-2 gap-4 my-auto">
        {/* Left: Yellow Sticky Note Memo */}
        <div className="p-3.5 bg-amber-100/70 rounded-lg border border-amber-200/80 shadow-xs flex flex-col justify-between transform -rotate-1 min-h-[220px]">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-800 font-semibold mb-2">
              <span>MEMO TO VISITOR</span>
              <span>READ ONLY</span>
            </div>
            <p className="text-xs text-amber-950 font-medium leading-relaxed italic">
              "Whether you're looking for a design lead to build an entire design system, or a creative partner to imagine new spatial paradigms — let's talk."
            </p>
          </div>

          <div className="pt-3 border-t border-amber-200/60 text-[10px] font-mono text-amber-800 space-y-1">
            <div>EMAIL: karthik.design@studio.io</div>
            <div>LOCATION: Bangalore / Remote Global</div>
          </div>
        </div>

        {/* Right: Quick Transmission Card */}
        <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between min-h-[220px]">
          <div className="text-[10px] font-mono text-slate-500 font-semibold mb-2 flex items-center justify-between">
            <span>FAST DISPATCH</span>
            <span className="text-[#0D99FF]">● ONLINE</span>
          </div>

          {submitted ? (
            <div className="my-auto text-center space-y-2 py-4">
              <CheckCircle2 className="w-7 h-7 text-emerald-500 mx-auto" />
              <div className="text-xs font-semibold text-slate-800">Message Dispatched!</div>
              <p className="text-[10px] text-slate-400 font-mono">Will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2 my-auto" onClick={(e) => e.stopPropagation()}>
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full text-xs px-2.5 py-1.5 rounded border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D99FF]"
                defaultValue="visitor@studio.com"
              />
              <textarea
                rows={3}
                placeholder="Write a brief inquiry or say hello..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs p-2.5 rounded border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D99FF] resize-none"
              />
              <button
                type="submit"
                className="w-full py-1.5 bg-slate-900 text-white rounded text-xs font-mono font-medium hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>SEND DISPATCH</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#EFE8CC] text-[10px] font-mono text-slate-400">
        <span>SECURITY: ENCRYPTED</span>
        <span className="text-slate-600 font-medium">REPLY LATENCY &lt; 24H</span>
      </div>
    </div>
  );
};
