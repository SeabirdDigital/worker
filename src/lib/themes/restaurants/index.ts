type DefaultReviews = {
	author: string;
	message: string;
}[];

type DefaultContact = {
	address?: string;
	phone?: string;
	email?: string;
};

type DefaultOpeningHours = {
	weekday: string;
	time: string;
}[];

export type RestaurantData<
	Reviews = DefaultReviews,
	Contact = DefaultContact,
	OpeningHours = DefaultOpeningHours
> = {
	reviews?: Reviews;
	contact?: Contact;
	openingHours?: OpeningHours;
};
