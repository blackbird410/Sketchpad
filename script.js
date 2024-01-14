createHtml();
const PAD_WIDTH = 500;
addGrid();
let shadeValue = 0;
let color = getColor();



function addGrid()
{
    let n = document.querySelector('#sizeRange').value;
    let size = PAD_WIDTH / n;
    n *= n;
    let container = document.querySelector('.gridContainer');
    let i = 0;
    for (i = 0; i < n; i++)
    {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = `${size}px`;
        grid.style.height = `${size}px`;
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = getColor();
        });

        container.appendChild(grid);
    }
}

function removeGrid() 
{
    let gridContainer = document.querySelector('.gridContainer');
    let grid = document.querySelector('.grid');
    while(grid)
    {
        gridContainer.removeChild(grid);
        grid = document.querySelector('.grid');
    }
}

function getColor()
{
    let option = getOption();

    switch(option)
    {
        case 'Normal':
            return document.querySelector('#colorPicker').value;
        case 'Rainbow':
            return rainbow();
        default:
            return shades(); 
    }
}

function getOption()
{
    document.querySelectorAll('[name="drawingOption"]').forEach(function(opt) {
        if (opt.checked)
            o = opt.value.toString()});
    return o;
}

function rainbow()
{
    let c = [];
    for (let i = 0;  i < 3; i++)
        c.push(Math.floor(Math.random() * 255));
    return 'rgb(' + c.toString() + ')';
}

function shades()
{
    shadeValue = (shadeValue + 1) % 255;
    return `rgb(${shadeValue}, ${shadeValue}, ${shadeValue})`;
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
    sizeRange.setAttribute('value', '16');
    
    const sizeLabel = document.createElement('label');
    sizeLabel.setAttribute('for', 'sizeRange');
    sizeLabel.textContent = `${sizeRange.value}x${sizeRange.value}`;
    
    sizeRange.addEventListener('input', () => {
        sizeLabel.textContent = `${sizeRange.value}x${sizeRange.value}`;
        removeGrid();
        addGrid();
    });

    resizeContainer.appendChild(sizeRange);
    resizeContainer.appendChild(sizeLabel);

    const clearButton = document.createElement('div');
    clearButton.classList.add('clearButton');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', () => {
        removeGrid();
        addGrid();
    });

    paramContainer.appendChild(colorContainer);
    paramContainer.appendChild(optionContainer);
    paramContainer.appendChild(resizeContainer);
    paramContainer.appendChild(clearButton);
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


