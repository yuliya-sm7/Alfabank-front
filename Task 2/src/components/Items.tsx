import React from "react";
import {connect} from "react-redux";
import {removeItem, changeItem, sorting} from "../redux/action";

const Items: React.FC<{
    list: any;
    ids: Array<string>;
    sort: (field: string, increase: boolean) => void;
    change: (id: string) => void;
    remove: (id: string) => void;
}> = ({list, ids, sort, change, remove}) => {
    return (
        <div className="items">
            <table className="table table-striped table-responsive-sm">
                <thead>
                    <tr>
                        <th className="col-7">
                            Название
                            <a onClick={() => sort("name", true)}>🔼</a>
                            <a onClick={() => sort("name", false)}>🔽</a>
                        </th>
                        <th className="col-3">
                            Цена
                            <a onClick={() => sort("price", true)}>🔼</a>
                            <a onClick={() => sort("price", false)}>🔽</a>
                        </th>
                        <th className="col-1"></th>
                        <th className="col-1"></th>
                    </tr>
                </thead>
                <tbody>
                    {ids.map((id) => {
                        return (
                            <tr key={id}>
                                <td>{list[id].name}</td>
                                <td>{list[id].price}</td>
                                <td>
                                    <button onClick={() => change(id)}> ✏️ </button>
                                </td>
                                <td>
                                    <button onClick={() => remove(id)}> ❌ </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr className="table-info">
                        <td>СУММА</td>
                        <td>
                            {ids.reduce(function (acc: number, cur: string) {
                                return acc + Number(list[cur].price);
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
    list: state.items,
    ids: Object.keys(state.items)
});

const mapDispatchToProps = (dispatch) => ({
    sort: (field, increase) => dispatch(sorting(field, increase)),
    remove: (id) => dispatch(removeItem(id)),
    change: (id) => dispatch(changeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
