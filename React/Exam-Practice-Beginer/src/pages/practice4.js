import React from "react";
import withMainLayout from "../layout/withMainLayout";
import NameList from "../components/NameList";

function Practice4() {
    return (
        <>
            <div>
                <p className="text-success lead">Задача 4: Изобразете списък от имена, като използвате .map() метода. 
                Когато кликнете върху име, то да се изтрива от списъка.</p>
            </div>
            <div>
                <NameList />
            </div>
        </>
    );
}

export default withMainLayout(Practice4);