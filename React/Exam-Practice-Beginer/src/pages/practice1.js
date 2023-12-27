import React from "react";
import withMainLayout from "../layout/withMainLayout";
import Button from "../components/Button";

function Practice1() {
    return (
        <>
            <div>
                <p className="text-success lead">Задача 1: Създайте компонент Button, който приема 
                label като prop и изобразява бутон със съответния текст.</p>
            </div>
            <div>
                <p className="text-info">Решение:</p>
                <Button label="Натисни ме" />
            </div>
        </>
    );
}

export default withMainLayout(Practice1);