/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const cache = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            cache.push(')');
        }
        else if (s[i] == '[') {
            cache.push(']');
        }
        else if (s[i] == '{') {
            cache.push('}');
        }
        else {
            if (cache.pop() !== s[i]) {
                return (false);
            }
        }
    }
    return (!cache.length);
};