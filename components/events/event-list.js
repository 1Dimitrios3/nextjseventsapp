import SingleEvent from './event-item';

function EventList(props) {
    const { events } = props;

    return (
        <ul>
            {events.map((event) =>  
            <SingleEvent 
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
            /> )}
        </ul>
    )
}

export default EventList;