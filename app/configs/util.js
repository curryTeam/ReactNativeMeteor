/**
 * @description common method
 * @author curry
 */
import Configuration from './config';

const printLog = (param) => {
    console.log(`项目${Configuration.VERSION}打印log如下：${param}`);
}

export default {
    printLog,
}