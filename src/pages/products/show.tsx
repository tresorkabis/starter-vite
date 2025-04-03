import { useOne, useShow } from "@refinedev/core";

export const ShowProduct = () => {

    const {
        query: { data, isLoading },
      } = useShow();

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Name : {data?.data.name}</h1>
            <p>Price : USD {data?.data.price}</p>
        </div>
    );
};