// ---------------------------------------------------------------------------------------------------------------
// Для коректної роботи хедер має мати клас .header, position: fixed, і решту стилів які прописані в темі 
// саме для хедера
// ---------------------------------------------------------------------------------------------------------------
export function initScrollControlledHeader() {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    // add class
    header.classList.toggle('scroll-header', scrollTop > 10);
    // hide when scroll
    // header.style.top = (scrollTop <= 10 || scrollTop < lastScrollTop) ? '0' : '-100px';
    // lastScrollTop = scrollTop;
  });
}

// ---------------------------------------------------------------------------------------------------------------


