const apiKey = "i9G4hj7FcpIiHkedYC5770WxoXMJuij5";

export async function getGifs({ keyword = "random" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=50&offset=0&rating=g&lang=es`;

  const res = await fetch(apiURL);
  const resJson = await res.json();
  const { data } = resJson;
  const gifs = data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.fixed_width_downsampled;
    return { title, id, url };
  });

  return gifs;
}

export async function getGifById({ id } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;

  const res = await fetch(apiURL);
  const resJson = await res.json();
  const { data } = resJson;
  const gif = {
    id: data.id,
    title: data.title,
    url: data.images.downsized_medium.url,
    username: data.username,
    source: data.source,
  };

  return gif;
}

export async function getTrendingSearch() {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;

  const res = await fetch(apiURL);
  const resJson = await res.json();
  const { data } = resJson;

  return data;
}

export async function getTrending() {
  const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

  const res = await fetch(apiURL);
  const resJson = await res.json();
  const { data } = resJson;
  const gifs = data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.fixed_width_downsampled;
    return { title, id, url };
  });

  return gifs;
}
