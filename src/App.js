import React, { Component } from 'react';
import Grid from './components/Grid';
import './App.css';
import { cellShouldLive } from './helpers/rules';


class App extends Component {
    constructor(){
        super();
        const rows = 30;
        const cells = 30;

        this.state = {
            rows,
            cells,
            speed: 100,
            generation: 0,
            grid: this.createGrid(rows, cells),
        }
    }

    componentDidMount() {
        this.seed();
        this.playButton();
    }

    createGrid = (rows, cells) => {
        return Array(rows).fill().map(() => Array(cells).fill(false))
    }

    selectBox = (selectedRow, selectedCell) => {
        this.setState(({ grid }) => ({
            grid: grid.map((row, rowIndex) => row.map((cell, cellIndex) => {
                if(rowIndex === selectedRow && cellIndex === selectedCell) {
                    return !cell;
                }
                return cell;
            }))
        }));
    }

    seed = () => {
        this.setState(({ grid }) => ({
            grid: grid.map(row => row.map(cell => {
                if (Math.floor(Math.random() * 4) === 1) {

                    return true;
                }

                return cell;
            }))
        }));
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    playButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.state.speed);
    }


    play = () => this.setState(({ grid, rows, cells, generation }) => {
        const newGrid = grid.map(row => row.map(cell => cell));

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cells; j++){
                newGrid[i][j] = cellShouldLive(i, j, grid);
            }
        }

        return {
            grid: newGrid,
            generation: generation + 1,
        };
    })


    render(){
        return (
            <div>
                <h1>The Game Of Life</h1>
                <Grid
                    grid={this.state.grid}
                    rows={this.state.rows}
                    cells={this.state.cells}
                    selectBox={this.selectBox}
                />
                <button onClick={this.pause}>Pause</button>
                <button onClick={this.playButton}>Play</button>
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }
}
export default App;
