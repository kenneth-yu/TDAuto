export const fetchFromYelp = async () => {
    const {
        YELP_API_KEY
    }: any = process.env

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer GIDN2rGPqmknOg6JCa9HHS7TGLvlpaGsTg8BMIpY1K5AE0I1LNDodLfqdTG49ajHwZWx_6z8nSvmoAG80BjFFilQHnnVYAUVbMCmJbVXmIF8t43-_AdvZ1V--IPmZHYx`
        }
      };
      
      return fetch('https://api.yelp.com/v3/businesses/t-and-d-auto-repair-brooklyn/reviews?limit=20&sort_by=yelp_sort', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

}