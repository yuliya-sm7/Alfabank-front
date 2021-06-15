import React from "react";
import {connect} from "react-redux";
import {removeItem} from "../../redux/action";

interface Item {
    name: string;
    price: number;
    id: string;
}

const Items: React.FC<{
    list: Array<Item>;
    remove: (id: string) => void;
}> = ({list, remove}) => {
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
                                {/* <td>
                                    <button onClick={() => edit(c.id)}> ✏️ </button>{" "}
                                </td>*/}
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
    remove: (obj) => dispatch(removeItem(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
