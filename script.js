createHtml();


function addGrid()
{
    let container = document.querySelector('.gridContainer');

}

function createHtml() 
{
    // Create the basic html structure
    const body = document.body;
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    const headerLeft = document.createElement('div');
    const headerRight = document.createElement('div');
    const paramContainer = document.createElement('div');
    const gridContainer = document.createElement('div');
    const colorContainer = document.createElement('div');
    const optionContainer = document.createElement('div');
    const resizeContainer = document.createElement('div');

    header.classList.add('header', 'container');
    main.classList.add('main', 'container');
    footer.classList.add('footer', 'container');
    headerLeft.classList.add('left');
    headerRight.classList.add('right');
    paramContainer.classList.add('paramContainer', 'container', 'colContainer');
    gridContainer.classList.add('gridContainer', 'container');
    colorContainer.classList.add('colorContainer', 'container', 'colContainer');
    optionContainer.classList.add('optionContainer', 'container');
    resizeContainer.classList.add('resizeContainer', 'container', 'colContainer');

    // Header part
    headerLeft.textContent = 'SketchPad';
    headerRight.textContent = 'ToggleButton';
    header.appendChild(headerLeft);
    header.appendChild(headerRight);

    // Main part
    const colorPicker = document.createElement('input');
    colorPicker.setAttribute('type', 'color');
    colorPicker.setAttribute('id', 'colorPicker');
    colorPicker.setAttribute('name', 'colorPicker');
    colorPicker.setAttribute('value', 'orange');
    colorContainer.appendChild(colorPicker);

    let options = ['Normal', 'Rainbow', 'Shades'];
    options.forEach(function(option) {
        const elt = document.createElement('input');
        const eltLabel = document.createElement('label'); 
        elt.setAttribute('type', 'radio');
        elt.setAttribute('id', option.toLowerCase());
        elt.setAttribute('name', 'drawingOption');
        elt.setAttribute('value', option);
        eltLabel.setAttribute('for', option.toLowerCase());
        eltLabel.textContent = option;
        
        if (option == 'Normal')
            elt.checked = true;
        
        optionContainer.appendChild(elt);
        optionContainer.appendChild(eltLabel);
    });

    const sizeRange = document.createElement('input');
    sizeRange.setAttribute('type', 'range');
    sizeRange.setAttribute('id', 'sizeRange');
    sizeRange.setAttribute('min', '16');
    sizeRange.setAttribute('max', '64');
    
    const sizeLabel = document.createElement('label');
    sizeLabel.setAttribute('for', 'sizeRange');
    sizeLabel.textContent = `${sizeRange.value}x${sizeRange.value}`;
    
    sizeRange.addEventListener('input', () => {
        sizeLabel.textContent = `${sizeRange.value}x${sizeRange.value}`;
    });

    resizeContainer.appendChild(sizeRange);
    resizeContainer.appendChild(sizeLabel);

    paramContainer.appendChild(colorContainer);
    paramContainer.appendChild(optionContainer);
    paramContainer.appendChild(resizeContainer);
    main.appendChild(paramContainer);
    main.appendChild(gridContainer);

    // Footer part
    const link = document.createElement('a');
    link.setAttribute('href', 'https://blackbird410.github.io/');
    link.setAttribute('target', '_blank');
    link.textContent = 'Copyright \u00A9 Neil Taison Rigaud 2024';
    footer.appendChild(link);

    body.append(header);
    body.append(main);
    body.append(footer);
}


