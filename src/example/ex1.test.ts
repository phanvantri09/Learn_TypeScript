import { testt } from "./ex1";

describe('testt()', () => {
    it('should n>1', () => {
        expect(testt(1)).toBe(true);
        expect(testt(2)).toBe(true);
        expect(testt(3)).toBe(true);
    });
    it('should  n = 0', () => {
        expect(testt(0)).toBe(false);
    });
    it('should n<0', () => {
        expect(testt(-1)).toBe(false);
        expect(testt(-2)).toBe(false);
        expect(testt(-3)).toBe(false);
    });
});