export interface FleetChart {
  ref: string;
  title: string,
  label: string,
  type: ChartType,
  data: ChartData[]
}

export enum ChartType {
  BAR = "bar",
  DOUGHNUT = "doughnut"
}

export interface ChartData {
  readonly label: string,
  readonly value: number;

  readonly backgroundColor: string
  readonly borderColor: string
}
