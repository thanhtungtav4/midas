/**
 * Theo dõi tất cả phần tử có class được chỉ định, chạy callback khi chúng vào viewport.
 * Nếu browser không hỗ trợ IntersectionObserver → gọi callback ngay lập tức cho tất cả phần tử.
 *
 * @param {string} className - tên class (không cần dấu chấm, ví dụ: 'lazy-animate')
 * @param {Function} callback - hàm sẽ chạy khi phần tử visible (nhận element làm tham số)
 * @param {Object} [observerOptions] - tùy chọn IntersectionObserver (nếu hỗ trợ)
 */
export default function handleIntersectionModule(
  className,
  callback,
  observerOptions = {},
) {
  if (typeof callback !== "function") {
    console.warn("handleIntersectionModule: callback phải là một hàm");
    return;
  }

  // Feature detection: Kiểm tra xem browser có hỗ trợ IntersectionObserver không
  if (
    !("IntersectionObserver" in window) ||
    !("IntersectionObserverEntry" in window) ||
    !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
  ) {
    console.warn(
      "IntersectionObserver không được hỗ trợ → fallback: gọi callback ngay lập tức",
    );

    // Fallback: Gọi callback cho tất cả phần tử ngay lập tức
    const targets = document.querySelectorAll(`.${className}`);
    targets.forEach((target) => {
      callback(target); // Gọi callback với element
    });

    return; // Không cần làm gì thêm
  }

  // Browser hỗ trợ → tiếp tục dùng Observer
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // trigger khi 10% visible (có thể chỉnh cao hơn nếu muốn nghiêm ngặt)
    ...observerOptions,
  };

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(
          `Element with class .${className} is in view! Executing callback.`,
        );
        callback(entry.target); // truyền element vào callback

        // Ngừng theo dõi sau khi chạy 1 lần (bỏ nếu muốn chạy nhiều lần)
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, defaultOptions);

  const targets = document.querySelectorAll(`.${className}`);

  if (targets.length === 0) {
    console.warn(`Không tìm thấy phần tử nào có class ".${className}"`);
    return;
  }

  targets.forEach((target) => {
    observer.observe(target);
  });

  // Trả về observer để disconnect sau nếu cần
  return observer;
}
