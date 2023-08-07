import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const imgURL = imageData.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }

            })
    };
    console.log(errors);
    console.log(img_hosting_token);

    return (
        <div className="w-full px-10 pb-10">
            <SectionTitle heading={'add an item'} subHeading={"What's new?"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full pb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex gap-3 py-4 align-middle">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue={'Pick one'} {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control py-4">
                    <label className="label">
                        <span className="label-text">Item Recipe</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Recipe"></textarea>
                </div>
                <div className="form-control w-full max-w-xs py-4">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <button type="submit" className="btn btn-md mt-5">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;