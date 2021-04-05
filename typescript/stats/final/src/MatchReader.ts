import { CSVFileReader, DataReader } from "./CSVFileReader";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

export class MatchReader {
  matches: MatchData[] = [];

  static fromCSV(): MatchReader {
    return new MatchReader(new CSVFileReader("football.csv"));
  }

  constructor(private reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3], 0),
          parseInt(row[4], 0),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
