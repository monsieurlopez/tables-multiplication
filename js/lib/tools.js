export const createAlert = (title, titleText = null, text, icon, confirmButtonText = null, footer = null, buttonClose = true, width = "60em") => {

    Swal.fire({
        title: title,
        titleText: titleText,
        text: text,
        icon: icon, // Otros valores: 'error', 'warning', 'info', 'question'
        confirmButtonText: confirmButtonText,
        showConfirmButton: !!confirmButtonText,
        showCloseButton: buttonClose,
        width: width,
        footer: footer
    });
};
