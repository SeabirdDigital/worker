const Header = () => {
	return (
		<div className="border-b border-neutral-700 bg-black">
			<div className="container flex justify-between">
				<div className="flex items-center py-6">
					<div className="h-8 w-8 bg-white"></div>
					<span>username</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
