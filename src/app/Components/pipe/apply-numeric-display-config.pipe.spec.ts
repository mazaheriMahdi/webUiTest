import {ApplyNumericDisplayConfigsPipe, BaseColumnType} from './apply-numeric-display-config.pipe';
import {NumberUtilService} from "../util/number.util.service";
import * as string_decoder from "string_decoder";

describe('ApplyNumericDisplayConfigsPipe', () => {

    let sut: ApplyNumericDisplayConfigsPipe;
    let numberUtilService: NumberUtilService;

    beforeEach(() => {
        numberUtilService = new NumberUtilService();
        sut = new ApplyNumericDisplayConfigsPipe(numberUtilService);
    })


    it('transform SHOULD return empty string WHEN value is null', () => {
        // Arrange
        let value = null;
        let dataType = BaseColumnType.Integer;
        let expected = "";

        // Act
        let actual = sut.transform(value, dataType, false, 0, 0);

        // Assert
        expect(actual).toBe(expected);
    });

    it('transform SHOULD return 0 WHEN value is 0', () => {
        // Arrange
        let value = 0;
        let dataType = BaseColumnType.Integer;
        let expected = "0";

        spyOn(numberUtilService, "convertNumber").withArgs(value, true, 0).and.returnValue(expected);

        // Act
        let actual = sut.transform(value, dataType, false, 0, 0);

        // Assert
        expect(actual).toBe(expected);
    });

    it('transform SHOULD return Σ WHEN value is Σ', () => {
        // Arrange
        let value = "Σ";
        let dataType = BaseColumnType.Integer;


        // Act
        let actual = sut.transform(value, dataType, false, 0, 0);

        // Assert
        expect(actual).toBe(value);
    });

    it('transform SHOULD return separated digit number WHEN value is integer and isDigitSeparatorEnabled true', () => {
        // Arrange
        let value = 0;
        let dataType = BaseColumnType.Integer;

        let convertedNumber = "100000";
        spyOn(numberUtilService, "convertNumber").withArgs(value, true, 0).and.returnValue(convertedNumber);

        let separatedNumber = "100,000";
        spyOn(numberUtilService, "separate3Digits").withArgs(convertedNumber).and.returnValue(separatedNumber);

        // Act
        let actual = sut.transform(value, dataType, true, 0, 0);

        // Assert
        expect(actual).toBe(separatedNumber);
    });

    it('transform SHOULD return converted number WHEN value is integer and isDigitSeparatorEnabled false', () => {
        // Arrange
        let value = 0;
        let dataType = BaseColumnType.Integer;

        let convertedNumber = "100000";
        spyOn(numberUtilService, "convertNumber").withArgs(value, true, 0).and.returnValue(convertedNumber);

        // Act
        let actual = sut.transform(value, dataType, false, 0, 0);

        // Assert
        expect(actual).toBe(convertedNumber);
    });

    it('transform SHOULD return separated digit number WHEN value is flout and isDigitSeparatorEnabled true', () => {
        // Arrange
        let value = 0;
        let dataType = BaseColumnType.Float;

        let convertedNumber = "100000";
        spyOn(numberUtilService, "convertNumber").withArgs(value, false, 0, false, 0).and.returnValue(convertedNumber);

        let separatedNumber = "100,000";
        spyOn(numberUtilService, "separate3Digits").withArgs(convertedNumber).and.returnValue(separatedNumber);

        // Act
        let actual = sut.transform(value, dataType, true, 0, 0);

        // Assert
        expect(actual).toBe(separatedNumber);
    });

    it('transform SHOULD return converted number WHEN value is flout and isDigitSeparatorEnabled false', () => {
        // Arrange
        let value = 0;
        let dataType = BaseColumnType.Float;

        let convertedNumber = "100000";
        spyOn(numberUtilService, "convertNumber").withArgs(value, false, 0, false, 0).and.returnValue(convertedNumber);

        // Act
        let actual = sut.transform(value, dataType, false, 0, 0);

        // Assert
        expect(actual).toBe(convertedNumber);
    });

    it('transform SHOULD return value.toString() WHEN value is not flout or integer', () => {
        // Arrange
        let value = "test";
        let dataType = BaseColumnType.Text;

        // Act
        let actual = sut.transform(value, dataType, false, 0, 0);

        // Assert
        expect(actual).toBe(value);
    });

});
