import React, {useCallback, useEffect, useState} from 'react';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {GiftedChat} from 'react-native-gifted-chat';
import {dialogflowConfig} from '../../dialogflow';
import uuid from 'react-native-uuid';
import {View, StyleSheet} from 'react-native';
import {Adita} from '../assets';

const Chat = () => {
  const BOT = {
    _id: 2,
    name: 'Adita',
    avatar: Adita,
  };

  const [messages, setMessages] = useState({
    messages: [
      {
        _id: 1,
        text: 'Hallo, aku Adita, Chatbot assistant pradita university',
        createdAt: new Date(),
        user: BOT,
      },
    ],
    id: 1,
    name: '',
  });

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }, []);

  const handleGoogleResponse = result => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
  };

  const sendBotResponse = text => {
    let msg = {
      _id: uuid.v4(),
      text,
      createdAt: new Date(),
      user: BOT,
    };

    setMessages(prevMsg => ({
      messages: GiftedChat.append(prevMsg.messages, [msg]),
    }));
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => ({
      messages: GiftedChat.append(previousMessages.messages, messages),
    }));

    const message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      res => handleGoogleResponse(res),
      err => console.log(err),
    );
  }, []);

  const onQuickReply = useCallback((reply = []) => {
    setMessages(previousMessages => ({
      messages: GiftedChat.append(previousMessages.messages, reply),
    }));

    const message = messages[0].value;

    Dialogflow_V2.requestQuery(
      message,
      res => handleGoogleResponse(res),
      err => console.log(err),
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages.messages}
        onSend={messages => onSend(messages)}
        onQuickReply={quickReply => onQuickReply(quickReply)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Chat;
