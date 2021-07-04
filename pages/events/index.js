import { useRouter } from "next/router";
import Head from 'next/head';
import { getAllEvents } from '../../helpers/api-util';
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

export default function AllEventsPage(props) {
    const router = useRouter();
    const { allEvents } = props;

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }
    return (
        <div>
             <Head>
                <title>All Events</title>
                <meta name="description" content="Find top quality personal development events that will help you evolve as a professional and a person." />
            </Head>
            <EventsSearch 
            onSearch={findEventsHandler}
            />
            <EventList 
            events={allEvents} 
            />
        </div>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            allEvents: events
        },
        revalidate: 60
    }
}