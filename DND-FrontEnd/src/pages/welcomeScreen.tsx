import react from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/welcomeScreen.css";
import Title from '../components/title';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div className="welcome-screen">
            <Title title="Welcome to DND!" description="Your journey begins here." />
            <div className="welcome-message">
                <button onClick={handleClick}>Start Adventure</button>
            </div>
        </div>
    );
};

export default WelcomeScreen;