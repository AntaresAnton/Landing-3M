// Constantes para las teclas
const KEY_F12 = 'F12';
const KEY_I = 'I';
const KEY_J = 'J';
const KEY_C = 'C';
const KEY_U = 'U';

// Deshabilitar clic derecho
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('El clic derecho está deshabilitado en esta página.');
});

// Deshabilitar inspección de elementos
document.addEventListener('keydown', function (event) {
    // Bloquear F12
    if (event.key === KEY_F12) {
        event.preventDefault();
        return false;
    }
    
    // Bloquear Ctrl+Shift+I (Windows) y Cmd+Option+I (Mac)
    if ((event.ctrlKey && event.shiftKey && event.key === KEY_I) ||
        (event.metaKey && event.altKey && event.key === KEY_I)) {
        event.preventDefault();
        return false;
    }
    
    // Bloquear Ctrl+Shift+J (Windows) y Cmd+Option+J (Mac)
    if ((event.ctrlKey && event.shiftKey && event.key === KEY_J) ||
        (event.metaKey && event.altKey && event.key === KEY_J)) {
        event.preventDefault();
        return false;
    }
    
    // Bloquear Ctrl+Shift+C (Windows) y Cmd+Option+C (Mac)
    if ((event.ctrlKey && event.shiftKey && event.key === KEY_C) ||
        (event.metaKey && event.altKey && event.key === KEY_C)) {
        event.preventDefault();
        return false;
    }
    
    // Bloquear Ctrl+U (Windows) y Cmd+U (Mac)
    if ((event.ctrlKey && event.key === KEY_U) ||
        (event.metaKey && event.key === KEY_U)) {
        event.preventDefault();
        return false;
    }
});

// Deshabilitar inspección de elementos
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
});

// Deshabilitar inspección de elementos
document.addEventListener('keydown', function(e) {
    // Bloquear Ctrl+U
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
    }
});
