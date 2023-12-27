import React from "react";
import withMainLayout from "../layout/withMainLayout";
import Clock from "../components/Clock";

function Practice5() {
    return (
        <>
            <div>
                <p className="text-success lead">Задача 5: Създайте компонент, който използва useState и 
                useEffect hooks, за да показва текущата дата и час и да се обновява на всяка секунда.</p>
            </div>
            <div>
                <Clock />
            </div>
        </>
    );
}

export default withMainLayout(Practice5);