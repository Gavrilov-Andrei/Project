import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return(
        <>
        <h1>Страница информации</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Consequatur repudiandae, sit fuga porro neque nulla eveniet ab, 
        alias explicabo repellendus at libero totam magni quo inventore repellat. 
        Sed, veritatis eum?
        </p>
        <button className="btn" onClick={() => navigate('/')}>
             Обратно к списку дел 
             </button>
        </>
    )
}