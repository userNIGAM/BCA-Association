export async function uploadImage(image) {
  const api = "6018bb19536be3c14ee250bedad234a6";
  const url = "https://api.imgbb.com/1/upload?key=" + api;
  const formData = new FormData();
  formData.append("image", image);
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  if (data.status !== 200) {
    return null;
  } else {
    return data.data.url;
  }
}
