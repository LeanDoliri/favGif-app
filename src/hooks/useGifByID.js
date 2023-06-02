import { useEffect, useState } from "react";
import { getGifById } from "../services/apiGif";

export function useGifById({id}) {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      getGifById({ id }).then((gif) => {
        setGif(gif);
        setLoading(false);
      });
    },
    []
  );

  return { loading, gif };
}