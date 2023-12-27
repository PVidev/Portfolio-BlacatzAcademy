import React from "react";
import withMainLayout from "../layout/withMainLayout";
import Counter from "../components/Counter";

function Practice2() {
    return (
        <>
            <div>
                <p className="text-success lead">Задача 2: Създайте компонент Counter, който показва 
                число и има два бутона - за увеличаване и намаляване на числото.</p>
            </div>
            <div>
                <Counter />
            </div>
        </>
    );
}

export default withMainLayout(Practice2);