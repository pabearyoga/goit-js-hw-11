let page = null;

export default function incrementPage() {
  return page += 1;
}

export const a =  function resetPage() {
 return page = 1;
}

export default function fetchImage(search) {
  const KEY = '28778434-1483e606d41ba08d2549939d9';
  // const options = {
  //   q: `${search}`,
  //   image_type: 'photo',
  //   orientation: 'horizontal',
  //   safesearch: 'true',
  //   per_page: '40',
  //   page: '1',
  // };

  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } return response.json().then(x => { incrementPage(); return x });
  });

}
