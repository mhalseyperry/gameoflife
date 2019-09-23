import React, { Component } from 'react';
import Grid from './components/Grid';
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.speed = 100;
        this.rows = 30;
        this.cells = 30;

        this.state = {
            generation: 0,
            grid: Array(this.rows).fill().map(() => Array(this.cells).fill(false))
        }
    }

    selectBox = (selectedRow, selectedCell) => {
        this.setState((prev) => {
            const grid = prev.grid.map((row, rowIndex) => {
                return row.map((cell, cellIndex) => {
                    if (rowIndex === selectedRow && cellIndex === selectedCell){
                        return !cell;
                    }

                    return cell;
                })
            })
            return { grid }
        })
    }

    seed = () => {
        this.setState((prev) => {
            const grid = prev.grid.map(row => row.map(cell => {
                if (Math.floor(Math.random() * 4) === 1) {
                    return true;
                }

                return cell;
            }))

            return { grid }
        })
    }

    componentDidMount() {
        this.seed();
    }

    render(){
        return (
            <div>
                <h1>The Game Of Life</h1>
                <Grid
                    grid={this.state.grid}
                    width={this.cells * 16}
                    selectBox={this.selectBox}
                />
                <p>{this.state.grid}</p>
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }
}

export default App;
