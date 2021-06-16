import React from "react";
import {connect} from "react-redux";
import {removeItem, changeItem} from "../redux/action";

interface Item {
    name: string;
    price: number;
}

const Items: React.FC<{
    list: Array<Item>;
    ids: Array<string>;
    change: (id: string) => void;
    remove: (id: string) => void;
}> = ({list, ids, change, remove}) => {
    return (
        <div className="items">
            <table className="table table-striped table-responsive-sm">
                <thead>
                    <tr>
                        <th className="col-7">Название</th>
                        <th className="col-3">Цена</th>
                        <th className="col-1"></th>
                        <th className="col-1"></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((c, index) => {
                        return (
                            <tr key={index}>
                                <td>{c.name}</td>
                                <td>{c.price}</td>
                                <td>
                                    <button onClick={() => change(ids[index])}> ✏️ </button>
                                </td>
                                <td>
                                    <button onClick={() => remove(ids[index])}> ❌ </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr className="table-info">
                        <td>СУММА</td>
                        <td>
                            {list.reduce(function (acc: number, cur: Item) {
                                return acc + Number(cur.price);
                            }, 0)}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    list: Object.values(state.items),
    ids: Object.keys(state.items)
});

const mapDispatchToProps = (dispatch) => ({
    remove: (id) => dispatch(removeItem(id)),
    change: (id) => dispatch(changeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
