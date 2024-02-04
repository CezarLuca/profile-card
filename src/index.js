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
    return <img src="Avatar.png" alt="profile" className="profile" />;
}

function Intro() {
    return (
        <div>
            <h1>Cezar Luca</h1>
            <p>
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
        <div>
            <Skill name="HTML" />
            <Skill name="CSS" />
            <Skill name="JavaScript" />
            <Skill name="React" />
            <Skill name="Node.js" />
            <Skill name="Express" />
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill">
            <h3>{props.name}</h3>
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
