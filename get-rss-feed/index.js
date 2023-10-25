const endpoint = "https://api.rss2json.com/v1/api.json";

[...Array(10)].map((_, i) =>{
  const feed_url = `https://example.co.jp/feed/${encodeURIComponent(`?paged=${i+1}`)}`;

  (async () => {
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed_url}`);
    const data = await res.json();
  
    data.items.forEach((item) => {
      if(item.categories.includes('サイト構築 -CSS')) {
        const tagText = `<li><a href="${item.link}">${item.title}<span>${item.categories}</span></a></li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend', tagText);
      }
    });
  })();
})