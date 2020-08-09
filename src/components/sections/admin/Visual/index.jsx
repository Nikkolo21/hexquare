import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVisualIdentity } from '../../../../services/project.service';
import './Visual.scss';

export default function Visual() {
    const { id } = useParams();
    const [colors, setColors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getVisualIdentity(id, (elem) => {
            const {color_palette = [], fonts = []} = elem;
            setColors(color_palette);
            setIsLoading(false);
        });
    }, [id])

    function handleChange(e, index) {
        let newColors = [...colors];
        newColors[index] = e.target.value;
        setColors(newColors);
    };

    function deleteItem(index) {
        let newColors = [...colors];
        newColors.splice(index, 1);
        setColors(newColors);
    };

    function addItem() {
        let newColors = [...colors];
        newColors.push("#FFFFFF");
        setColors(newColors);
    };

    return (
        <section className="color-section">
            {
                !isLoading &&
                <section className="colors-sandbox">
                    {
                        colors.map((elem, index)=> {
                            return (
                                <div key={index} onDoubleClick={() => deleteItem(index)} title="Delete" style={{backgroundColor: elem}} className="color-box">
                                    <input minLength={2} maxLength={12} value={elem} onChange={(e) => handleChange(e, index)}></input>
                                </div>
                            )
                        })
                    }
                    {
                        colors.length < 8 && <div href="/#" onClick={addItem} className="color-box add-color">
                            <small>Add a color</small>
                        </div>
                    }
                </section>
            }
            {colors && colors[0] && <small className="delete-message">Double click to delete an item</small>}
        </section>
    )
}
