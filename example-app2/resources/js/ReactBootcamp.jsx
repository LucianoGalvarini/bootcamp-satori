import { ReactQueryNumber } from "./bases/02-useEffect/ReactQueryNumber";
import {
    QueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

const QueryClient = new QueryClient();

export const ReactBootcamp = () => {
    return (
        <>
            <QueryClientProvider>
                <h1>Use effect class</h1>
                <ReactQueryNumber />
            </QueryClientProvider>
        </>
    );
};
