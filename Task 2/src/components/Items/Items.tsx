import React from "react";
import {connect} from "react-redux";
import {removeItem, changeItem} from "../../redux/action";

interface Item {
    name: string;
    price: number;
    id: string;
}

const Items: React.FC<{
    list: Array<Item>;
    change: (id: string) => void;
    remove: (id: string) => void;
}> = ({list, change, remove}) => {
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
                                    <button onClick={() => change(c.id)}> ✏️ </button>{" "}
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

const mapStateToProps = (state) => ({
    list: state.items
});

const mapDispatchToProps = (dispatch) => ({
    remove: (id) => dispatch(removeItem(id)),
    change: (id) => dispatch(changeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
