const apiKey = "i9G4hj7FcpIiHkedYC5770WxoXMJuij5";

export async function getGifs({ keyword = "nemo" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`;

  const res = await fetch(apiURL);
  const resJson = await res.json();
  const { data } = resJson;
  const gifs = data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.downsized_medium;
    return { title, id, url };
  });

  return gifs;
}

export async function getGifById ({ id } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;

  const res = await fetch(apiURL);
  const resJson = await res.json();
  const { data } = resJson;
  const gif = {
    id: data.id,
    title: data.title,
    url: data.images.downsized_medium.url,
    username: data.username,
    source: data.source
  }

  return gif;
}