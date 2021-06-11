import React from "react";
interface Item {
    name: string;
    price: number;
    id: number;
}

const Items: React.FC<{
    list: Array<Item>;
    setList: (list: Array<Item>) => void;
}> = ({list, setList}) => {
    const remove = (id) => {
        setList(list.filter((el) => el.id !== id));
    };

    const handleEdit = (id) => {
        setList(
            list.map((it) => {
                if (it.id === id) {
                    return {
                        ...it,
                        name: "отредактировано"
                    };
                }
                return it;
            })
        );
    };

    return (
        <div className="items">
            <table>
                <tr>
                    <th>Название</th>
                    <th>Цена</th>
                </tr>
                <tbody>
                    {list.map((c, id) => {
                        return (
                            <tr key={id}>
                                <td>{c.name}</td>
                                <td>{c.price}</td>
                                <button onClick={() => handleEdit(c.id)}> ✏️ </button>
                                <button onClick={() => remove(c.id)}> ❌ </button>
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
