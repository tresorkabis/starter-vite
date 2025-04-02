import { useOne } from "@refinedev/core";

export const ShowProduct = () => {
    const { data, isLoading } = useOne({
        resource: "products",
        id: "1",
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Name : {data?.data.name}</h1>
            <p>Price : USD {data?.data.price}</p>
        </div>
    );
};