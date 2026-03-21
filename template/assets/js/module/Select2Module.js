export default function Select2Module() {
    $(document).ready(function () {
        $('.re-select-main').select2({ minimumResultsForSearch: -1 });

        $('.re-select-main').on('change', function () {
            const form = $('.woocommerce-ordering');

            form.submit();
        });
    });
}