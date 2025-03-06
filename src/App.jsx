import { useState, useTransition } from 'react';

function App() {
    const [pending, startTransition] = useTransition();
    const [text, setText] = useState("Click Here");
    const [loading, setLoading] = useState(false); // <-- Track loading manually
    const handleButton = () => {
        setLoading(true); // Start loading
        startTransition(() => {
            setText("");
        });
        setTimeout(() => {
            setText("Completed");
            setLoading(false); // Stop loading after 2 sec
        }, 2000);
    };
    return (
        <div>
            <h1>useTransition Hook</h1>
            {loading ? ( // <-- Use loading state instead of pending
                <img className="w-40 h-40  "
                    src="https://assets-v2.lottiefiles.com/a/8e3a9f7c-1179-11ee-8831-e341af8fad88/3IMPKd5CHr.gif"
                    alt="Loading..."
                />
            ) : null}
            <button disabled={loading} onClick={handleButton}>
                {text}
            </button>
        </div>
    );
}

export default App;
