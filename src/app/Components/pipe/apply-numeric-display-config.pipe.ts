// @ts-ignore
import {Pipe, PipeTransform} from '@angular/core';
import {NumberUtilService} from "../util/number.util.service";

export enum BaseColumnType {
    Integer,
    Text,
    Float,

}

@Pipe({
    name: 'applyNumericDisplayConfig',
})
export class ApplyNumericDisplayConfigsPipe implements PipeTransform {
    public constructor(private numberUtilService: NumberUtilService) {
    }

    public transform(
        value: number | string | null,
        dataType: BaseColumnType,
        isDigitSeparatorEnabled: boolean,
        floatingPointCount: number,
        charCount: number
    ): string {
        if (value == null) return "";

        if (value.toString() === 'Σ') return value.toString();

        switch (dataType) {
            case BaseColumnType.Integer:
                if (isDigitSeparatorEnabled) return this.numberUtilService.separate3Digits(this.numberUtilService.convertNumber(+value, true, charCount));
                return this.numberUtilService.convertNumber(+value, true, charCount);
            case BaseColumnType.Float:
                if (isDigitSeparatorEnabled)
                    return this.numberUtilService.separate3Digits(this.numberUtilService.convertNumber(+value, false, charCount, false, floatingPointCount));
                return this.numberUtilService.convertNumber(+value, false, charCount, false, floatingPointCount);
            default:
                return value.toString();
        }
    }
}
