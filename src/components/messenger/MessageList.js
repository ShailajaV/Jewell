import React from 'react';
import { ListView, Image, Text, View } from 'react-native';
/*import {
    ListView, Text, Row,
    View, Subtitle, Caption
} from '@shoutem/ui';*/
import moment from 'moment';
import { UNDEFINED, SPACE } from '../../actions/constants';
import styles from '../common/CommonCSS';

const Message = ({ msg }) => {
  let srcImg = SPACE;
  if (typeof msg.authorImg === UNDEFINED || msg.authorImg === SPACE ||
              msg.authorImg === null) {
    srcImg = require('../common/images/empty.png');
  } else {
    srcImg = { uri: msg.authorImg };
  }
  return (
    <View>
        <Image
        style={styles.chatImageStyle}
        source={srcImg}
        resizeMode={Image.resizeMode.strech}
        />
        <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Text>{msg.author}</Text>
                <Text>{moment(msg.time).from(Date.now())}</Text>
            </View>
            <Text styleName="multiline">{msg.message}</Text>
        </View>
    </View>
  );
};

const MessageList = ({ chats, onLayout }) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = ds.cloneWithRows(chats);
  return (
    <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={msg => <Message msg={msg} />}
      onLayout={onLayout}
      style={{ backgroundColor: '#fff' }}
    />
    /*<ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      style={{ backgroundColor: '#fff' }}
    />*/
  );
};

export default MessageList;
