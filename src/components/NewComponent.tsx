import {Button} from "./Button";
import React from "react";
import {CurrencyType} from "../App";

type NewComponentPropsType = {
    filterMoney: () => CurrencyType[];
    changeFilter: (filter: FilterType) => void;
}

export type FilterType = 'dol' | 'rub' | 'all';
export const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <div>
            {props.filterMoney().map((el, index) => {
                return (
                    <li key={index}>
                        <span>{el.banknots}</span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>
                )
            })
            }
            <Button title={'rub'} callBack={() => props.changeFilter('rub')} />
            <Button title={'dol'} callBack={() => props.changeFilter('dol')} />
            <Button title={'all'} callBack={() => props.changeFilter('all')} />
        </div>
    )
}