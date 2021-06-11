import React from "react";
interface Item {
    name: string;
    price: number;
    id: string;
}

const Items: React.FC<{
    list: Array<Item>;
    setList: (list: Array<Item>) => void;
    edit: (id: string) => void;
}> = ({list, setList, edit}) => {
    const remove = (id) => {
        setList(list.filter((el) => el.id !== id));
    };

    return (
        <div className="items">
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((c, id) => {
                        return (
                            <tr key={id}>
                                <td>{c.name}</td>
                                <td>{c.price}</td>
                                <td>
                                    <button onClick={() => edit(c.id)}> ✏️ </button>{" "}
                                </td>
                                <td>
                                    <button onClick={() => remove(c.id)}> ❌ </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>СУММА</td>
                        <td>
                            {list.reduce(function (acc: number, cur: Item) {
                                return acc + Number(cur.price);
                            }, 0)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
export default Items;
