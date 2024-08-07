window.onload = () => {
  const tab_switchers = document.querySelectorAll("[data-switcher]");
  //   [
  //  0   <a data-switcher data-tab="1">Home</a>,
  //  1   <a data-switcher data-tab="2">About</a>,
  //  2   <a data-switcher data-tab="3">Services</a>,
  //  3   <a data-switcher data-tab="4">Contact</a>
  //   ];

  // "tab = index"

  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];

    const page_id = tab_switcher.dataset.tab;
    // <a data-switcher data-tab="1">Home</a> --> dataset.tab = 1;

    tab_switcher.addEventListener("click", () => {
      document
        .querySelector(".tabs .tab.is-active")
        .classList.remove("is-active");

      tab_switcher.parentNode.classList.add("is-active");

      switchPage(page_id);
    });
  }
};

function switchPage(page_id) {
  const current_page = document.querySelector(".pages .page.is-active");
  current_page.classList.remove("is-active");

  const next_page = document.querySelector(
    `.pages .page[data-page="${page_id}"]`
  );
  next_page.classList.add("is-active");
}
