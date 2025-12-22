import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!`@#$%^&*(){}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-gray-800/90 backdrop-blur rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center rounded-xl overflow-hidden bg-gray-900 border border-gray-700 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Your secure password"
            className="w-full px-4 py-2 bg-transparent text-orange-400 font-mono outline-none"
          />
          <button
            onClick={copypassword}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white font-medium"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-sm text-gray-300">
          {/* Length */}
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="range">
              Length: <span className="text-orange-400">{length}</span>
            </label>
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              id="range"
              onChange={(e) => setLength(e.target.value)}
              className="w-full cursor-pointer accent-orange-500"
            />
          </div>

          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-orange-500 w-4 h-4"
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-orange-500 w-4 h-4"
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
