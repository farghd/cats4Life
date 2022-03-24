const GetImage = async () => {
	const fetchedData = await fetch(
		"https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=6&api_key=2ab73ab1-f5ca-4a8a-bf86-25e64a0f6abf"
	);
	const res = await fetchedData.json();
	return res;
};

export default GetImage;
