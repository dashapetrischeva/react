import { useId, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addProduct } from '@/store/slices/products/productsSlice';
import styles from "./AddProduct.module.css";
function AddProduct() {
	const [product, setProduct] = useState({
		title: "",
		imgSrc: "",
		price: ""
	});
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const titleId = useId()
	const imgSrcId = useId()
	const priceId = useId()
	function handleChange(e) {
		const { name, value } = e.target;
		setProduct(prev => ({
			...prev,
			[name]: value
		}));
	}


	function handleSubmit(e) {
		e.preventDefault();
		if (!product.title || !product.imgSrc || !product.price) {
			alert('Fill in all fields.');
			return;
		}
		dispatch(addProduct(product));
		navigate('/products');

	}
	return (
		<div>
			<h1>Add Product</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={titleId}>Title:</label>
					</div>
					<div className={styles.fieldInput}>
						<input
							type="text"
							name="title"
							id={titleId}
							value={product.title}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={imgSrcId}>Image: </label>
					</div>
					<div className={styles.fieldInput}>
						<input
							type="text"
							name="imgSrc"
							id={imgSrcId}
							value={product.imgSrc}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={priceId}>Price:</label>
					</div>
					<div className={styles.fieldInput}>
						<input
							type="text"
							name="price"
							id={priceId}
							value={product.price}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className={styles.formButtons}>
					<button>Save</button>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;