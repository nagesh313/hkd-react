import React, { Component } from "react";
import { Table } from "react-bootstrap";
export class DashboardComponent extends Component<{}, {}> {
  leaderBoardData = [
    { rank: "1", name: "Anuj", score: "3333333" },
    { rank: "2", name: "Ram", score: "555555" },
    { rank: "3", name: "Anand", score: "222222" },
    { rank: "4", name: "Nishant", score: "1111111" },
    { rank: "5", name: "Rahul", score: "123" },
  ];
  render() {
    return (
      <div>
        <Table
          responsive
          striped
          bordered
          hover
          size="sm"
          style={{ maxHeight: "300px" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.leaderBoardData.map((data: any, index: any) => {
              return (
                <tr key={index}>
                  <td key={index}> {data.rank}</td>
                  <td key={index}> {data.name}</td>
                  <td key={index}> {data.score}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
