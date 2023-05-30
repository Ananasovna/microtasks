import React, {useState} from 'react';
import './App.css';
import {FilterType, NewComponent} from "./components/NewComponent";

export type CurrencyType = {
    banknots: string,
    value: number,
    number: string,
}
function App() {

    const [money, setMoney] = useState<CurrencyType[]>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState('all');

    const changeFilter = (filter: FilterType) => {
        setFilter(filter);
    }
    const filterMoney = () => {
        let filteredMoney = money;
        switch (filter) {
            case 'all':
                filteredMoney = money;
                break;
            case 'rub':
                filteredMoney = money.filter(el => el.banknots === 'RUBLS');
                break;
            case 'dol':
                filteredMoney = money.filter(el => el.banknots === 'Dollars');
                break;
        }

        return filteredMoney;
    }

    return (
        <div className="App">
            <NewComponent filterMoney={filterMoney} changeFilter={changeFilter}/>
    </div>
  );
}

export default App;
