import { useForm, useSelect } from "@refinedev/core";

export const EditProduct = () => {

    const { onFinish, mutation, query } = useForm();

    const record  = query.data?.data;

    const { options } = useSelect(
        {
            resource: "categories",
        }
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.currentTarget).entries());

        onFinish(
            {
                ...data,
                price: Number(data.price).toFixed(2),
                category : { id: Number(data.category) },
            }
        );
    };

    return (
       <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" defaultValue={record?.name} /><br />

        <label htmlFor="description">Description</label>
        <textarea 
            name="description" 
            id="description" 
            defaultValue={record?.description}    
        /> <br />

        <label htmlFor="price">Price</label>
        <input 
            type="text" 
            name="price" 
            id="price" 
            defaultValue={record?.price}
            pattern="\d*\.?\d*" /> <br />

        <label htmlFor="material">Material</label>
        <input 
            type="text" 
            name="material" 
            id="material" 
            defaultValue={record?.material}
             /> <br />

        <label htmlFor="category">Category</label>
        <select id="category" name="category">
            {options?.map((option) => (
            <option
                key={option.value}
                value={option.value}
                selected={record?.category.id == option.value}
            >
                {option.label}
            </option>
            ))}
        </select> <br />

        {mutation.isSuccess && <span>successfully submitted!</span>}
        <button type="submit">Submit</button>

       </form>
    );
};