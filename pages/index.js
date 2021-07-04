import Head from 'next/head';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

export default function HomePage(props) {
    const { events } = props;

    return (
        <div>
            <Head>
                <title>SCLEvents</title>
                <meta name="description" content="Find top quality personal development events that will help you evolve as a professional and a person." />
            </Head>
            <EventList 
            events={events} 
            />
        </div>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800 // half hour
    }
}