import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardContent} from '../../components/CardContent';
import {Container} from '../../components/Container';

interface EventsProps {
	id_event: number,
	title: string,
	image: string,
  schedule: string,
	content: string,
	createdAt: string,
	updatedAt: string
}

const Events = ({navigation}: any) => {
  const [events, setEvents] = useState<EventsProps[]>([] as EventsProps[])

  useEffect(() => {
    fetch('https://ffb1eebfba46.ngrok.io/api/events')
    .then(res => res.json())
    .then(({data}) => setEvents(data))
  }, [])

  return (
    <Container>
      <Text style={styles.header}>Event Terbaru</Text>
      <View style={styles.eventWrapper}>
        {
          events.map(event => {
            return(
              <CardContent
                key={event.id_event}
                url={`https://ffb1eebfba46.ngrok.io/${event.image}`}
                title={event.title}
                time={new Date(event.schedule).toDateString()}
                handlePress={() => navigation.navigate('EventDetail', {id_event: event.id_event})}
              />
            )
          })
        }
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
    fontWeight: '700',
  },
  eventWrapper: {
    width: '100%',
  },
});

export default Events;
