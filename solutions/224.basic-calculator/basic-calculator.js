/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var result = 0, sum = 0, sign = 1
    var stack = []
    for(var i =0;i < s.length;i++){
        debugger
    	var c = s.charAt(i)
    	if(!isNaN(c) && c != ' '){
    		sum = 10*sum + parseInt(c)
    	}else if(c == '+'){
    		result += sign * sum
    		sum = 0
    		sign = 1
    	}else if(c == '-'){
    		result += sign*sum
    		sum = 0
    		sign = -1
    	}else if(c == '('){
    		stack.push(result)
    		stack.push(sign)
    		sign = 1
    		result = 0
    	}else if(c == ')'){
    		result += sign * sum
    		sum = 0
    		result *= stack.pop()
    		result += stack.pop()
    	}
    }
    if(sum != 0) result += sign*sum
    return result
};