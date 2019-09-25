import React, { Component } from 'react';
import Box from './Box.js'
import '../index.css'

class Grid extends Component {
    render = () => {
        const { cells, grid, selectBox } = this.props;
        const width = cells * 16;
        return (
            <div className="grid" style={{ width }}>
                {grid.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <Box
                                key={`${rowIndex}_${cellIndex}`}
                                boxClass={cell ? "box on" : "box off"}
                                selectBox={() => selectBox(rowIndex, cellIndex)}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        )
    }
}
export default Grid;
