// @ts-ignore
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberUtilService {
  public separate3Digits(x: number | string): string {
    x = x.toString();
    return "";
  }

  public convertNumber(value: number, isInt: boolean, chartCount: number, isSuffixNumberEnabled?: boolean, floatCount?: number): string {
    return "";
  }
}
