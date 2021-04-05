import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResult,
      row[6]
    ]
  }
}