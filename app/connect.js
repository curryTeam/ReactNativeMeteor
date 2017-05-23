/**
 * @description connect socket
 * @author curry.liang
 */
import Meteor from 'react-native-meteor';

import Configuration from './configs/config';

export default function() {
    // connect meteor socket,only once at the initialization of the project
    const url = Configuration.DEV_SOCKET_URL
    Meteor.connect(url);
}
