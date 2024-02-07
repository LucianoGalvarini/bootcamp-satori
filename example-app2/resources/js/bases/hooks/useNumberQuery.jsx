import { useQuery } from "@tanstack/react-query";

const handleFetchRandomNumber = async () => {
    const url =
        "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

    const response = await fetch(url);
    const data = await response.text();
    return +data;
};

const useNumberQuery = () => {
    const query = useQuery({
        queryKey: ["randomNumber"],
        queryFn: handleFetchRandomNumber,
    });

    return query;
};

export default useNumberQuery;
