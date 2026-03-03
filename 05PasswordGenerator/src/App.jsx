import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(17);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-[420px]">

        <h1 className="text-white text-xl text-center mb-4 font-semibold">
          Password generator
        </h1>

        {/* Password Box */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-2 rounded-l-lg bg-gray-100 text-orange-700 font-medium outline-none"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition"
          >
            copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 text-orange-400 text-sm">

          <input
            type="range"
            min="6"
            max="25"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />

          <span>Length: {length}</span>

          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            Characters
          </label>

        </div>
      </div>
    </div>
  );
}

export default App;