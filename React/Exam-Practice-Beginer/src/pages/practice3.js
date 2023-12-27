import React from "react";
import withMainLayout from "../layout/withMainLayout";
import LoginForm from "../components/LoginForm";

function Practice3() {
    return (
        <>
            <div>
                <p className="text-success lead">Задача 3: . Направете форма за потребителски вход, която 
                приема потребителско име и парола. Използвайте ref, за да вземете стойността на въведеното
                потребителско име след подаване на формата.</p>
            </div>
            <div>
                <LoginForm />
            </div>
        </>
    );
}

export default withMainLayout(Practice3);