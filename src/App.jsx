import "./App.css";
import Toast from "./components/Toast.jsx";

function App() {
    return (
        <>
            <Toast type="success" message="Success!" onClose={() => {}} />
            <Toast type="error" message="Error!" onClose={() => {}} />
            <Toast type="info" message="Info!" onClose={() => {}} />
            <Toast type="warning" message="Warning!" onClose={() => {}} />
            <Toast type="message" message="This is a message." />
            <h1>I want to make a toast 🥂</h1>
        </>
    );
}

export default App;
