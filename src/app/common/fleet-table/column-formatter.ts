export interface ColumnFormatter {
  format(value: any): string;
}

export class DollarFormatter implements ColumnFormatter {
  format(value: any): string {
    return value + "$";
  }

}

export class IdFormatter implements ColumnFormatter {
  format(value: any): string {
    return value.slice(0, 6);
  }

}

export class DateFormatter implements ColumnFormatter {
  format(value: any): string {
    return String(this.fixDate(value));
  }

  private fixDate(value: any) {
    const dateParts = String(value).split(',').map(str => Number(str));

    if (dateParts.length < 3) {
      throw new Error("Illegal value type");
    }
    const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    if (dateParts.length > 3) {
      date.setHours(dateParts[3]);
    }
    if (dateParts.length > 4) {
      date.setMinutes(dateParts[4]);
    }

    return date.toLocaleString();
  }

}
