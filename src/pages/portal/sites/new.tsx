import { useState, type FormEventHandler } from "react";
import { sites } from "~/db/sites";
import { api } from "~/utils/api";

const NewSite = () => {
	const mutation = api.sites.new.useMutation();
	const [isRestaurant, setIsRestaurant] = useState(false);
	const [invalidInput, setInvalidInput] = useState(false);

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		type SiteQuery = {
			id: string;
			name: string;
			tagline: string;
			hosts: string[];
			colors: {
				primary: string | null;
				secondary: string | null;
				tertiary: string | null;
				neutral: string | null;
			};
			restaurantData?: {
				phone: string;
				email: string;
				address: string;
			};
		};

		const newSite: SiteQuery = {
			id: formData.get("id")?.toString() ?? "",
			name: formData.get("name")?.toString() ?? "",
			tagline: formData.get("tagline")?.toString() ?? "",
			hosts: [formData.get("host")?.toString() ?? ""],
			colors: {
				primary: null,
				secondary: null,
				tertiary: null,
				neutral: null,
			},
			restaurantData: {
				phone: formData.get("phone")?.toString() ?? "",
				email: formData.get("email")?.toString() ?? "",
				address: formData.get("address")?.toString() ?? "",
			},
		};

		const invalidId = newSite.id === "" || newSite.id.length > 24;
		const invalidName = newSite.name === "" || newSite.name.length > 512;
		const invalidTagline =
			newSite.tagline === "" || newSite.tagline.length > 512;

		const invalidHost = newSite.hosts[0] === "";

		const invalidPhone = newSite.restaurantData?.phone === "";
		const invalidEmail = newSite.restaurantData?.email === "";
		const invalidAddress = newSite.restaurantData?.address === "";
		const invalidRestaurantData =
			isRestaurant && (invalidPhone || invalidEmail || invalidAddress);

		if (
			invalidId ||
			invalidName ||
			invalidTagline ||
			invalidHost ||
			invalidRestaurantData
		) {
			setInvalidInput(true);
			return;
		}

		mutation.mutate(newSite);
		if (mutation.error) {
			console.error(mutation.error);
		}

		window.location.href = "/portal";
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				{invalidInput && <span>Invalid input</span>}
				<div>
					<label htmlFor="id">Id</label>
					<input type="text" id="id" name="id" />
				</div>

				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" />
				</div>

				<div>
					<label htmlFor="tagline">Tagline</label>
					<input type="text" id="tagline" name="tagline" />
				</div>

				<div>
					<label htmlFor="host">Host</label>
					<input type="text" id="host" name="host" />
				</div>

				<div>
					<label htmlFor="isRestaurant">Is Restaurant</label>
					<input
						type="checkbox"
						name="isRestaurant"
						id="isRestaurant"
						onChange={(e) => setIsRestaurant(e.target.checked)}
					/>
				</div>

				{isRestaurant && (
					<div>
						<div>
							<label htmlFor="phone">Phone</label>
							<input type="text" id="phone" name="phone" />
						</div>

						<div>
							<label htmlFor="email">Email</label>
							<input type="text" id="email" name="email" />
						</div>

						<div>
							<label htmlFor="address">Address</label>
							<input type="text" id="address" name="address" />
						</div>
					</div>
				)}

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default NewSite;
