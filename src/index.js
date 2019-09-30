module.exports = function check(str, bracketsConfig) {
    let srtArr = str.split('');
    let stack = [];
    let openBrackets = [];
    let closeBrackets = [];
    let openIndex;
    let closeIndex;

    // получаем массивы скобок
    for (let i = 0; i < bracketsConfig.length; i++) {openBrackets.push(bracketsConfig[i][0]);};
    for (let i = 0; i < bracketsConfig.length; i++) {closeBrackets.push(bracketsConfig[i][1]);};

    // пишем логику
    for (let i = 0; i < srtArr.length; i++) {
        openIndex = openBrackets.indexOf(srtArr[i]);
        closeIndex = closeBrackets.indexOf(srtArr[i]);
       
        // console.log(openIndex  + ' open');
        // console.log(closeIndex + ' close');
        // console.log('\\\\\\\\\\\\\\\\\\\\\\');
    
        if (openIndex !== closeIndex) {

            if (openIndex !== -1) {
                stack.push(openIndex);
                // console.log(stack);
                // console.log('++++++++++++++++++++++++')
                continue;
            }

            if (closeIndex !== -1) {
                openIndex = stack.pop();
                // console.log(stack);
                // console.log('------------------------')
                if (closeIndex !== openIndex) {
                    // console.log('opaopa')
                    return false;
                }
            }

        } else {
            
            if (stack[stack.length-1] !== openIndex) {
                stack.push(openIndex);
                // console.log(stack);
                // console.log('if   ++++++++++++++++++++++++')
            } else {
                openIndex = stack.pop();
                // console.log(stack);
                // console.log('if   ------------------------')
            }
        }
    }

    // проверим на парность
    if (stack.length !== 0 ) {
        return false
    }

    return true;
}
