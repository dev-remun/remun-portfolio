import { describe, it, expect } from 'vitest';
import { formatPrice } from './util.js';

describe('formatPrice utility', () => {
    it('should format numbers to price strings', () => {
        // # setup the test variables
        let test_amount = 10; 
        let expected_result = '$10.00'; 
        
        // # check if the function returns the expected result
        let actual_result = formatPrice(test_amount);
        
        expect(actual_result).toBe(expected_result);
    });
});