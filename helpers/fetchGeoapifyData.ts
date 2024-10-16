export const fetchGeoapifyData = async (searchTerm: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

  const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
    searchTerm
  )}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("Error fetching Geoapify data:", error);
  }
};
