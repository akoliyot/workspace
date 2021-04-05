import fs from "fs";

export interface DataReader {
  read(): void;
  data: string[][];
}

export class CSVFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
