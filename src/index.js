import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img src="Avatar.png" alt="profile" className="avatar" />;
}

function Intro() {
    return (
        <div>
            <h1>Cezar Luca</h1>
            <p className="data">
                Web Developer. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill name="HTML" bgColor="#ADD8E6" emote="strong" />
            <Skill name="CSS" bgColor="#F0E68C" emote="strong" />
            <Skill name="JavaScript" bgColor="#90EE90" emote="strong" />
            <Skill name="React" bgColor="#FFA07A" emote="good" />
            <Skill name="Node.js" bgColor="#ADD8E6" emote="stong" />
            <Skill name="Express" bgColor="red" emote="baby" />
        </div>
    );
}

function Skill(props) {
    const emote = props.emote;
    const bgColor = props.bgColor;
    const style = {
        backgroundColor: bgColor,
    };

    let emoji;
    switch (emote) {
        case "strong":
            emoji = "💪";
            break;
        case "good":
            emoji = "👍";
            break;
        case "baby":
            emoji = "👶";
            break;
        default:
            emoji = "";
    }

    return (
        <div className="skill" style={style}>
            <h3>
                {props.name} {emoji}
            </h3>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
