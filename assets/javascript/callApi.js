fetch("https://633900f5937ea77bfdc59e0b.mockapi.io/maybe")
  .then((response) => response.json())
  .then((data) => {
    const app = {
      render: function () {
        const html = data.map((item, index) => {
          return `
          <div class="col l-2-4 m-4 s-12 d-c">
                  <img src="${item.img}" alt="">
                  <div class="item__title d-c">
                    <h2>${item.name}</h2>
                    <span>${item.title}</span>
                  </div>
                </div>
                    `;
        });
        $(".maybe__item").innerHTML = html.join("");
      },

      start: function () {
        this.render();
      },
    };

    app.start();
  });