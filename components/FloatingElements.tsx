'use client';

export function FloatingElements() {
  return (
    <div className="floating-elements">
      <div className="floating-element top-20 left-10 text-purple-400">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-60"></div>
      </div>
      <div className="floating-element top-32 right-20 text-blue-400">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50"></div>
      </div>
      <div className="floating-element top-48 left-1/3 text-green-400">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-70"></div>
      </div>
      <div className="floating-element top-64 right-1/4 text-yellow-400">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 opacity-40"></div>
      </div>
      <div className="floating-element bottom-32 left-16 text-indigo-400">
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-60"></div>
      </div>
      <div className="floating-element bottom-48 right-12 text-pink-400">
        <div className="w-5 h-5 rounded-lg bg-gradient-to-r from-pink-400 to-rose-400 opacity-50"></div>
      </div>
    </div>
  );
}
