import fs from "fs";

export class CSVFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync("football.csv", {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
