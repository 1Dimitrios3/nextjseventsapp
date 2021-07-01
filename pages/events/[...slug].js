import { useRouter } from "next/dist/client/router"

export default function FilteredEventsPage() {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Hello from filtered event's page!</h1>
        </div>
    )
}