const   btn_departments = document.getElementById('btn-departments'),
        grid = document.getElementById('grid');

        /*
        dispositivoMovil = () => {
            if(window.innerWidth <= 800){
                return true
            }else{
                return false
            }
        }
        */
        dispositivoMovil = () => window.innerWidth <= 800;

btn_departments.addEventListener('mouseover', () => {
    
    if(!dispositivoMovil()){
        grid.classList.add('active');    
    }

});

grid.addEventListener('mouseleave', () => {

    if(!dispositivoMovil()){
        grid.classList.remove('active');
    }

})


/*=============================================
=  Seleccionando los enlaces de las 
   categorías =
=============================================*/

document.querySelectorAll('#menu .container-categories a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        // console.log(e.target.dataset.categorie)
        document.querySelectorAll('#menu .subcategorie').forEach((categoria) => {
            // Por cada categoría ejecute el siguiente evento
            categoria.classList.remove('active');
            if(categoria.dataset.categorie == e.target.dataset.categorie){
                categoria.classList.add('active');
            }
        })
    })
})

/*=============================================
=             Eventos Moviles                 =
=============================================*/

const   hambugerButton = document.getElementById('hamburguer-button'),
        containerLinks = document.querySelector('.menu .container-links-nav'),
        btnDepartments = document.getElementById('btn-departments'),
        btnCloseMenu = document.getElementById('close-button');

hambugerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(containerLinks.classList.contains('active')){
        containerLinks.classList.remove('active');
        document.querySelector('body').style.overflow = 'visible';
    }else{
        containerLinks.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    }
})

// Click en botón "Todos los departamentos" y aparecen las categorías

btn_departments.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('active');
    btnCloseMenu.classList.add('active');
})

// Botón "Regresar Categorias"

document.querySelector('#btn-back-categories').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('active');
    btnCloseMenu.classList.remove('active');
})

