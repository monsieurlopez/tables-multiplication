export const createAlert = (title, text, icon, confirmButtonText, buttonClose = true, width = "60em") => {

    Swal.fire({
        title: title,
        text: text,
        icon: icon, // Otros valores: 'error', 'warning', 'info', 'question'
        confirmButtonText: confirmButtonText,
        showCloseButton: buttonClose,
        widht: width,
    });
};
