import { Fragment } from 'react';
import Head from 'next/head';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function EventDetailPage(props) {
    const event = props.selectedEvent;

    if(!event) {
        return (
            <div className="center">
                <p>Loading...</p>
            </div>
        );   
    }

    return (
        <Fragment>
             <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
            <EventSummary title={event.title}/>
            <EventLogistics 
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
          
        </Fragment>
    )
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const featuredEvents = await getFeaturedEvents();

    const paths = featuredEvents.map(event => ({
        params: {
            eventId: event.id
        }
    }))

    return {
        paths: paths,
        fallback: 'blocking' // or either true || false
    }
}