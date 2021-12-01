import React, { useReducer } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

// const reducer = (state, value) => { // PRESERVA EL ESTADO
//     return state + value; // ASI NO SE HACE...
// }

const reducer = (state, action) => {
    switch (action) {
        case 'sumar':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'restar':
            return {
                ...state,
                count: state.count - 1 < 1 ? 0 : state.count - 1,
                error: state.count < 1 ? 'Error: the counter must be bigger than 0' : null,
            }
        case 'borrarError':
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
};

const Counter = () => {
    
    const [{count, error}, dispatch] = useReducer(reducer, {
        count: 0, 
        error: null
    });

    const handlerSubstract = () => {
        dispatch('restar');
    }

    const handlerAdd = () => {
        dispatch('sumar');
    }

    return <div>
        <div className="counter">
            <div>
                <button type="button" onClick={handlerSubstract}>
                    <FontAwesomeIcon icon={faMinus} className="btn"/>
                </button>
            </div>
            <div><h1>{count}</h1></div>
            <div>
                <button type="button" onClick={handlerAdd}>
                    <FontAwesomeIcon icon={faPlus} className="btn"/>
                </button>
            </div>
        </div>  
        {error && (
            <div>
                <center>
                    <button className="btn" onClick={() => dispatch('borrarError')}>Delete Error</button>
                    <p style={{color:"red"}}>{error}</p>
                </center>
            </div>
        )}
        </div>;
};

export default Counter;

