import Link from 'next/link';

function SingleEvent(props) {
    const { title, image, date, location, description, id } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const formattedAddress = location.replace(', ', '\n');
    
    const exploreLink = `/events/${id}`;

    return (
        <li key={id}>
            <img src={'/' + image} alt={title} />
            <div>
               <div>
                   <h2>{title}</h2>
                   <div>
                       <time>
                           {formattedDate}
                       </time>
                   </div>
                   <div>
                       <address>
                           {formattedAddress}
                       </address>
                   </div>
               </div>
               <div>
                   <Link href={exploreLink}>Explore the event</Link>
               </div>
            </div>
        </li>
    );
}

export default SingleEvent;