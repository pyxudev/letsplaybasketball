"use client";
export default function Home() {
  function search() {
    const keyword = document.getElementById("keyword") as HTMLInputElement;
    const api = process.env.NEXT_PUBLIC_API_URL!;
    fetch(api as string,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ kw: keyword.value }),
        credentials: "omit"
      })
      .then(response => response.json())
      .then(data => {
        const result = document.getElementById("results") as HTMLDivElement;
        result.innerHTML = "";
        for (let i = 1; i < Object.keys(data).length; i++) {
          const div = document.createElement("div");
          div.className = "game";
          div.innerHTML = `<a href='${data[i].link}' target='_blank'><h3>チーム名：${data[i].teamname}</h3><p>参加条件：${data[i].requirements}</p><p>開催時間：${data[i].time}</p><p>場所：${data[i].address}</p></a>`;
          result.appendChild(div);
        }
      })
      .catch(error => console.error('Error:', error));
  }
  return (
    <>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <div className="site-header__logo">バスケやろうぜ</div>
        </div>
      </header>
      <main>
        <div className="search-form">
          <h1>東京・千葉・埼玉検索</h1>
          <div className="search-items">
            <input type="text" id="keyword" />
            <button id="search-btn" onClick={() => search()}>Search</button>
          </div>
        </div>

        <div id="results"></div>
      </main>
    </>
  );
}
