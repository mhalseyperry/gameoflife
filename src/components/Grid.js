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

    // render() {
    //     const width = this.props.cols * 16;
    //     let rowsArr = [];

    //     let boxClass = "";
    //     for (var i = 0; i < this.props.rows; i++){
    //         for (var j = 0; j < this.props.cols; j++) {
    //             let boxId = i + "_" + j;

    //             boxClass = this.props.grid[i][j] ? "box on" : "box off";
    //             rowsArr.push(
    //                 <Box
    //                     boxClass={boxClass}
    //                     key={boxId}
    //                     boxId={boxId}
    //                     row={i}
    //                     col={j}
    //                     selectBox={this.props.selectBox}
    //                 />
    //             );
    //         }
    //     }

    //     return (
    //         <div className="grid" style={{width: width}}>
    //             {rowsArr}
    //         </div>
    //     )
    // }
}
export default Grid;
